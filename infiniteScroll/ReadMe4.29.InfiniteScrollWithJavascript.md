Okay, so now that we have our unspun cash photos being loaded in our domme.

The next step is to figure out our infinite scroll functionality.

So what we want to happen exactly is as we scroll before we reach the bottom of our page, we want an

event to trigger our get photos method so that the pictures load below before we have a chance to scroll

past them.

In this case, of course, we're reaching the bottom of the page because we haven't implemented that

just yet.

So a good first place to start is with this W3 schools resource, which I'll provide a link in

the course and we're going to look at the possible Domme events within each Timmo.

If we scroll down, the most popular event, of course, is the click event.

But in our case, we are looking for the scroll event.

So right here we can see that these scroll event is an event that occurs when an element scrollbar is

being scrolled.

This means that we can apply this scroll event to any element.

So we're going to go to the bottom.

Of our JavaScript here, and we're going to comment out a title.

And then we're actually going to add the event listener to our window.

So the window is the parent of the document and the grandparent of our body.

So we're going to the highest possible level and we're going to add event listener.

And then in our brackets, single quotes, we want to target these Skrull event and then what we want

to do on that scroll event.

We're actually going to make an arrow function.

And we're going to create our function actually within our event listener here.

So what we're gonna do.

Nice and simple is we're just going to console that log.

Scrolled.

So that we can have an idea of how often this is actually triggered, so let's save that and jump back.

We're going to refresh the page here.

And we're just going to scroll down until we reach.

OK, so you can see we've reached the bottom here and we have called this event forty three times.

So, of course for our purposes we only want to call it once when we get to the bottom of the page.

So we're going to need to narrow this down a little bit.

So there are multiple ways to implement infinite scroll functionality.

I'm going to explain the thinking behind my implementation visually.

So to start with, I mentioned earlier that the window is the parent of the document and the grandparent

of the body.

That's where our event listener is attached.

It represents the entire browser window.

So we're going to need two values from our window.

The first is going to be window dot, inner height.

All of these values are in pixels, by the way.

And this is going to represent the total height of our browser window.

This is a number that is going to stay constant unless the browser window is resized.

And the second value we're going to need is window dot scroll.

Why?

And this is the distance from the top of the page that the user has scrolled.

So this is a number that will keep going up as the user scrolls further down the page.

We will add these two numbers up on the left side of our IF statement, and we'll need to compare them

to something.

So if we move over here, we'll see.

We're going to compare it to the height of everything in the body, including what is not within the

view.

So that'll be the combined height of all of our images in our case.

But we can't just have.

The body offset height.

We will actually need to modify it a little bit.

And in this case, we're going to subtract a pixel amount.

This can be any value.

But in this case, I'm putting 1000 pixels because most window inner heights are less than a thousand

pixels.

So that means when the user scrolls to this point, that is when we will trigger our event and load

more photos.

I will also provide a copy of this diagram within the course so that you can check it for reference

in the future.

Let's jump back to the code and see how we're actually going to implement this.

So within our aero function, we're gonna delete our console log and we're going to replace that with

an if statement.

Let's actually scroll down a little bit if window dot, inner height.

That's the height of our browser window plus window dot scroll.

Why?

How high we are from the top of the page.

Is greater than or equal to the right side of our IF statement, which will be document dott body dot

offset height.

And we're gonna subtract 1000 for our 1000 pixels.

OK?

And then we'll add in curly brackets.

I'm going to copy in a number of console logs just to show what exactly is happening with this logic.

Don't worry.

You don't need to copy these into your project.

I will be deleting them momentarily.

Let's jump back and check it out.

So if we scroll to the bottom of the page, let's see what happens.

OK, so you might be noticing a few things.

First, we didn't run the function 50 times, but we did run it more than once.

Which is not great, but we'll come back to that.

Let's check out some of the values here so we can see that our window dot inner height is eight twenty

one and it always stays a twenty one.

So that means eight hundred and twenty one pixels from here to here.

And we can see that our window dots scroll why is increasing with each log?

And, of course, our combined value of inner height, plus Korowai is also increasing every time.

And lastly, we can see that our document body offset height minus a thousand is staying consistent.

Because once the page has loaded, we have the full height of all the images.

So you'll notice that the first time this triggered.

This number on the left side, four thousand three hundred and eighty six is bigger than this number

on the right side, which is four thousand two hundred and sixty one.

You'll notice the same thing and all the rest of the console walks.

So this is only being triggered once the left side of our if statement becomes a bigger value than the

right side of our statement.

So we are definitely getting closer.

Back in our code, we can get rid of our console logs.

If you want to add one that just says load more, that's something you can do.

But we will now call our get photos method.

So let's save that and just see what happens.

So when we scroll to the bottom, we can see that we're tracking this multiple times at once.

You can see a jump from three to six.

And you can see that we've loaded more than we would like.

Ideally, we want to only load once and then wait until we hit the bottom and then load it again.

But you can see that we've loaded it six times instead.

So we're going to need to be getting a little bit more specific in how we're determining when to actually

load more photos in order to do that.

We're going to need to create a ready boolean.

And this will be true only when the images have finished loading.

We're going to take a look at that in the next video, because that is also deeply tied with our loading

functionality where we want to show the loading animation when we first load the page.

So we'll tackle that in the next video.

I'll see you then.

Bye for now.