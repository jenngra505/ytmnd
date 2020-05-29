var bans = new Howl({
	src: ["audio/homebrew.ogg"],
	loop: true,
});
var update_time = new Date();
var percent_time = 0.57686;
var rate = 0.75;
var rate_timer = percent_time;
var rateIncreaseBeforeNextLineOfDialogue = 5;
function update() {
	var divwidth = document.getElementById('rumbling_bans').offsetWidth;
	var divheight = document.getElementById('rumbling_bans').offsetHeight;
	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());
	rate_timer -= rate * delta / 1000;
	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		bans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	document.getElementById("ban").style.top = ((rate - Math.random() * rate * 2)+((divheight-149)/2)) + "px";
	document.getElementById("ban").style.left = ((rate - Math.random() * rate * 2)+((divwidth-200)/2)) + "px";
        document.getElementById("ban").playbackRate = (rate/4);
	requestAnimationFrame(update);
}
function run() {
	bans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
