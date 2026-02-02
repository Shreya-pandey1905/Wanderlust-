const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

// INDEX ROUTE (show all listings)
router.get(
    "/",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});

        res.render("listings/index.ejs", { allListings });
    })
);

// NEW ROUTE (form)
router.get("/new", (req, res) => {
    console.log(req.user);
    if (!req.isAuthenticated()) {
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/login");
    }
    res.render("listings/new.ejs");
}
);

// CREATE ROUTE
router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res) => {
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing created!!")
        res.redirect("/listings");
    })
);

// SHOW ROUTE
router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id)
            .populate("reviews")
            .populate("owner");
        if (!listing) {
            req.flash("error", "listing you created does not exist");
            res.redirect("/listings");
        }
        console.log(listing);
        res.render("listings/show.ejs", { listing });
    })
);

// EDIT ROUTE
router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "listing you created does not exist");
            res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    })
);

// UPDATE ROUTE
router.put(
    "/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        let { id } = req.params;

        let updatedData = {
            ...req.body.listing,
            image: {
                url: req.body.listing.image,
                filename: "listingimage",
            },
        };

        await Listing.findByIdAndUpdate(id, updatedData);
        res.redirect(`/listings/${id}`);
    })
);

// DELETE ROUTE
router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    })
);

module.exports = router;
