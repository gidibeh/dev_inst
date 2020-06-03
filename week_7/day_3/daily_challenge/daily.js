In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

xCreate a class named Video. The class should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.
xCreate a method on the Video object called watch(). When that method is called, it should use display a string like “You watched all 60 seconds of Otters Holding Hands!”
xInstantiate a new Video object and call the watch() method on it.
xInstantiate another Video object with different constructor arguments.




class Video {
  constructor(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
  }
  watch() {
    console.log(`You watched all ${this.seconds} seconds of Otters Holding Hands!`);
  }
}


let newVid = new Video("Otters", "Gidi", 60);
newVid.watch();




class clip extends Video {
  constructor(title, uploader, seconds, rated) {
    super(title, uploader, seconds); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.rated = rated;
  }

  newerVideo() {
    console.log(`This movie called ${this.title} is rated ${this.rated}`);
  }
}

let attempt = new clip("Otters", "Gidi", 60, "R");
attempt.newerVideo();