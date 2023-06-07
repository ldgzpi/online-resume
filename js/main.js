// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Ver todo.</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Un poco más sobre mí.</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>¡Estemos en contacto!</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>Algunos links útiles.</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Habilidades.</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Descargar CV</td>\
  </tr>\
  </table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contacto:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:pilarledesmagonzalez@gmail.com\">pilarledesmagonzalez@gmail.com</a></td>\
  </tr>\
</table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Experiencia:</span></h2><table>\
  <tr>\
    <td>Photoshop</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Premiere Pro</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Rickrolling</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr></table>";
}

function about(){
  return "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  <li><a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\
  </ul>";
}
// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="ver-todo") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "sobre-mi") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contacto") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="experiencia") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
