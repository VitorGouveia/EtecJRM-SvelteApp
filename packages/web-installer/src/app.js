import { html } from "lit";

function ASCIIAnimation(animArray, DOMtarget, speed = animArray.length * 10) {
  var currentFrame = 0;
  for (var i = 0; i < animArray.length; i++) {
    animArray[i] = animArray[i].replace(/ /g, "&nbsp;");
    animArray[i] = "<pre>" + animArray[i] + "</pre>";
  }
  DOMtarget.innerHTML = animArray[0];
  currentFrame++;
  this.animation = setInterval(function () {
    DOMtarget.innerHTML = animArray[currentFrame];
    currentFrame++;
    if (currentFrame >= animArray.length) currentFrame = 0;
  }, speed);
  this.getCurrentFrame = function () {
    return currentFrame;
  };
}

const timer = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function levenshteinDistance(s, t) {
  if (s.length === 0) return t.length;
  if (t.length === 0) return s.length;

  return Math.min(
    levenshteinDistance(s.substr(1), t) + 1,
    levenshteinDistance(t.substr(1), s) + 1,
    levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
  );
}

/**
 * this should really be a function that receives screen APIs
 * such as clear terminal, open file, etc e etc
 */
const commandList = {
  help: {
    gui: false,
    textSpeed: 50,
    clear: false,
    // prettier-ignore
    commands: [`
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
VVVVVVVV           VVVVVVVV  iiii           tttt                                                            GGGGGGGGGGGGG                                                                                  iiii                    
V::::::V           V::::::V i::::i       ttt:::t                                                         GGG::::::::::::G                                                                                 i::::i                   
V::::::V           V::::::V  iiii        t:::::t                                                       GG:::::::::::::::G                                                                                  iiii                    
V::::::V           V::::::V              t:::::t                                                      G:::::GGGGGGGG::::G                                                                                                          
 V:::::V           V:::::V iiiiiii ttttttt:::::ttttttt       ooooooooooo   rrrrr   rrrrrrrrr         G:::::G       GGGGGG   ooooooooooo   uuuuuu    uuuuuu  vvvvvvv           vvvvvvv    eeeeeeeeeeee    iiiiiii   aaaaaaaaaaaaa   
  V:::::V         V:::::V  i:::::i t:::::::::::::::::t     oo:::::::::::oo r::::rrr:::::::::r       G:::::G               oo:::::::::::oo u::::u    u::::u   v:::::v         v:::::v   ee::::::::::::ee  i:::::i   a::::::::::::a  
   V:::::V       V:::::V    i::::i t:::::::::::::::::t    o:::::::::::::::or:::::::::::::::::r      G:::::G              o:::::::::::::::ou::::u    u::::u    v:::::v       v:::::v   e::::::eeeee:::::ee i::::i   aaaaaaaaa:::::a 
    V:::::V     V:::::V     i::::i tttttt:::::::tttttt    o:::::ooooo:::::orr::::::rrrrr::::::r     G:::::G    GGGGGGGGGGo:::::ooooo:::::ou::::u    u::::u     v:::::v     v:::::v   e::::::e     e:::::e i::::i            a::::a 
     V:::::V   V:::::V      i::::i       t:::::t          o::::o     o::::o r:::::r     r:::::r     G:::::G    G::::::::Go::::o     o::::ou::::u    u::::u      v:::::v   v:::::v    e:::::::eeeee::::::e i::::i     aaaaaaa:::::a 
      V:::::V V:::::V       i::::i       t:::::t          o::::o     o::::o r:::::r     rrrrrrr     G:::::G    GGGGG::::Go::::o     o::::ou::::u    u::::u       v:::::v v:::::v     e:::::::::::::::::e  i::::i   aa::::::::::::a 
       V:::::V:::::V        i::::i       t:::::t          o::::o     o::::o r:::::r                 G:::::G        G::::Go::::o     o::::ou::::u    u::::u        v:::::v:::::v      e::::::eeeeeeeeeee   i::::i  a::::aaaa::::::a 
        V:::::::::V         i::::i       t:::::t    tttttto::::o     o::::o r:::::r                  G:::::G       G::::Go::::o     o::::ou:::::uuuu:::::u         v:::::::::v       e:::::::e            i::::i a::::a    a:::::a 
         V:::::::V         i::::::i      t::::::tttt:::::to:::::ooooo:::::o r:::::r                   G:::::GGGGGGGG::::Go:::::ooooo:::::ou:::::::::::::::uu        v:::::::v        e::::::::e          i::::::ia::::a    a:::::a 
          V:::::V          i::::::i      tt::::::::::::::to:::::::::::::::o r:::::r                    GG:::::::::::::::Go:::::::::::::::o u:::::::::::::::u         v:::::v          e::::::::eeeeeeee  i::::::ia:::::aaaa::::::a 
           V:::V           i::::::i        tt:::::::::::tt oo:::::::::::oo  r:::::r                      GGG::::::GGG:::G oo:::::::::::oo   uu::::::::uu:::u          v:::v            ee:::::::::::::e  i::::::i a::::::::::aa:::a
            VVV            iiiiiiii          ttttttttttt     ooooooooooo    rrrrrrr                         GGGGGG   GGGG   ooooooooooo       uuuuuuuu  uuuu           vvv               eeeeeeeeeeeeee  iiiiiiii  aaaaaaaaaa  aaaa
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
    `,
  `
██    ██ ██ ████████  ██████  ██████       ██████   ██████  ██    ██ ██    ██ ███████ ██  █████  
██    ██ ██    ██    ██    ██ ██   ██     ██       ██    ██ ██    ██ ██    ██ ██      ██ ██   ██ 
██    ██ ██    ██    ██    ██ ██████      ██   ███ ██    ██ ██    ██ ██    ██ █████   ██ ███████ 
 ██  ██  ██    ██    ██    ██ ██   ██     ██    ██ ██    ██ ██    ██  ██  ██  ██      ██ ██   ██ 
  ████   ██    ██     ██████  ██   ██      ██████   ██████   ██████    ████   ███████ ██ ██   ██ 
                                                                                                 
                                                                                                       
  `,
  `
██▒   █▓ ██▓▄▄▄█████▓ ▒█████   ██▀███       ▄████  ▒█████   █    ██  ██▒   █▓▓█████  ██▓ ▄▄▄      
▓██░   █▒▓██▒▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒    ██▒ ▀█▒▒██▒  ██▒ ██  ▓██▒▓██░   █▒▓█   ▀ ▓██▒▒████▄    
 ▓██  █▒░▒██▒▒ ▓██░ ▒░▒██░  ██▒▓██ ░▄█ ▒   ▒██░▄▄▄░▒██░  ██▒▓██  ▒██░ ▓██  █▒░▒███   ▒██▒▒██  ▀█▄  
  ▒██ █░░░██░░ ▓██▓ ░ ▒██   ██░▒██▀▀█▄     ░▓█  ██▓▒██   ██░▓▓█  ░██░  ▒██ █░░▒▓█  ▄ ░██░░██▄▄▄▄██ 
   ▒▀█░  ░██░  ▒██▒ ░ ░ ████▓▒░░██▓ ▒██▒   ░▒▓███▀▒░ ████▓▒░▒▒█████▓    ▒▀█░  ░▒████▒░██░ ▓█   ▓██▒
   ░ ▐░  ░▓    ▒ ░░   ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░    ░▒   ▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒    ░ ▐░  ░░ ▒░ ░░▓   ▒▒   ▓▒█░
   ░ ░░   ▒ ░    ░      ░ ▒ ▒░   ░▒ ░ ▒░     ░   ░   ░ ▒ ▒░ ░░▒░ ░ ░    ░ ░░   ░ ░  ░ ▒ ░  ▒   ▒▒ ░
     ░░   ▒ ░  ░      ░ ░ ░ ▒    ░░   ░    ░ ░   ░ ░ ░ ░ ▒   ░░░ ░ ░      ░░     ░    ▒ ░  ░   ▒   
      ░   ░               ░ ░     ░              ░     ░ ░     ░           ░     ░  ░ ░        ░  ░
     ░                                                                    ░                        
  `],
  },
  emacs: {
    gui: true,
    textSpeed: 0,
    clear: true,
    commands: [
      html`<div>
        <h1>hello world</h1>
      </div>`,
    ],
  },
  "hello world": {
    gui: false,
    textSpeed: 10,
    clear: false,
    commands: ["Hello world my fiend"],
  },
  clear: {
    gui: false,
    textSpeed: 0,
    clear: true,
    commands: [],
  },
  echo: {
    gui: false,
    textSpeed: 0,
    clear: false,
    commands: [
      (...args) => {
        const VARS = {
          $HOME: "/home/vitor",
        };

        const replacedArgs = args.map((arg) => VARS[arg] || arg);

        return `${replacedArgs.join(" ")}`;
      },
    ],
  },
  lolcat: {
    gui: false,
    textSpeed: 0,
    clear: false,
    commands: [
      html`<div class="rainbow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda
        autem rem et sit ipsa eum magni esse iste eos, ex, numquam deleniti
        facilis velit ab quidem iure! Tenetur, ratione.
      </div> `,
    ],
  },
  animation: {
    gui: false,
    textSpeed: 0,
    clear: false,
    commands: [
      (() => {
        var animArray4 = [
          "[>        ]",
          "[=>       ]",
          "[==>      ]",
          "[===>     ]",
          "[====>    ]",
          "[=====>   ]",
          "[======>  ]",
          "[=======> ]",
          "[========>]",
        ];

        function makeDiv() {
          return document.createElement("div");
        }

        const container = makeDiv();

        new ASCIIAnimation(animArray4, container);
        return html`${container}`;
      })(),
    ],
  },
};

setTimeout(() => {
  document.querySelector("#splash").setAttribute("hidden", "true");
}, 2000);

window.addEventListener("keydown", (event) => {
  // focus the input if not focused
  // const inputIsFocused =
  //   document.activeElement === document.querySelector("#bash");

  // if (!inputIsFocused) {
  //   document.querySelector("#bash").focus();
  // }

  // on arrow change blink character placement

  // listen for TAB for word completion and suggestion
  // listen for CTRL + C for exit command
  // listen for CTRL + Z to suspend

  // super + enter to create new terminal with tiling window manager
  // super + t to open transparent fullscreen terminal
  // super + c to close

  if (event.ctrlKey && event.key === "c") {
    // clean shit
    event.preventDefault();
  }
});

(async () => {
  const component = await import("haunted").then((module) => module.component);
  const virtual = await import("haunted").then((module) => module.virtual);
  const useState = await import("haunted").then((module) => module.useState);
  const useEffect = await import("haunted").then((module) => module.useEffect);
  const useCallback = await import("haunted").then(
    (module) => module.useCallback
  );

  const Folder = virtual(() => {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="16"
        height="16"
        fill="#fafafa"
      >
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80V160h512V144C512 117.5 490.5 96 464 96zM0 432C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48V192H0V432z"
        />
      </svg>
    `;
  });

  function Terminal() {
    const [command, setCommand] = useState("");
    const [commands, setCommands] = useState([]);
    const [history, setHistory] = useState([]);

    const handleSubmit = useCallback(
      (event) => {
        event && event.preventDefault();
        console.log(command);
        setCommand("");
        setHistory([...history, command]);

        // check pipe operator in here, before splitting args

        const [currentCommand, ...args] = command.split(" ");

        if (!commandList[currentCommand]) {
          // check in the command list if any command looks like this one
          const commandListArray = Object.keys(commandList);

          const similarityHeap = commandListArray.map((command) =>
            levenshteinDistance(command, currentCommand)
          );

          // get the lowest number in the array
          const indexofLowestNumberCommand = similarityHeap.indexOf(
            Math.min(...similarityHeap)
          );

          const closestCommand = commandListArray[indexofLowestNumberCommand];

          setCommands([
            ...commands,
            {
              type: "text",
              html: `command ${currentCommand} doesnt exist, did you mean ${closestCommand}`,
            },
          ]);
          return;
        }

        const commandExec = commandList[currentCommand];
        let oldCommands = [...commands];

        if (commandExec.clear) {
          setCommands([]);
          oldCommands = [];
        }

        commandExec.commands.forEach(async (command, index) => {
          await timer(index * commandExec.textSpeed);

          const cmd = {
            type: commandExec.gui ? "virtual" : "text",
            html: typeof command === "function" ? command(...args) : command,
          };

          setCommands([...oldCommands, cmd]);

          oldCommands.push(cmd);
        });
      },
      [commands, command, setCommands]
    );

    useEffect(() => {
      document.querySelector("#bash").focus();

      const callback = (event) => {
        if (event.key === "Enter") {
          // put command in queue
          handleSubmit();
          return;
        }

        if (event.ctrlKey && event.key === "c") {
          setCommands([
            ...commands,
            {
              type: "virtual",
              html: html`<form style="display: flex; align-items: flex-end;">
                <label>
                  vitor
                  <span>${Folder()}</span>

                  <span> Nix/packages </span>

                  on master
                  <span>${">"}</span>
                </label>

                <span style="width: 5px !important; height: 100%;"></span>

                <div style="display: flex; align-items: flex-end;">
                  ${command}
                </div>
              </form>`,
            },
          ]);
          setCommand("");
        }
      };

      window.addEventListener("keydown", callback);

      return () => {
        window.removeEventListener("keydown", callback);
      };
    }, [commands, setCommands, command]);

    return html`
      <div>
        ${commands.map((command) =>
          command.type === "virtual"
            ? html`${command.html}`
            : html`<div id="text">${command.html}</div>`
        )}

        <form
          style="display: flex; align-items: flex-end;"
          @submit=${handleSubmit}
        >
          <label>
            vitor
            <span>${Folder()}</span>

            <span> Nix/packages </span>

            on master
            <span>${">"}</span>
          </label>
          <span style="width: 5px !important; height: 100%;"></span>
          <div
            id="bash"
            contenteditable="true"
            .value=${command}
            @input=${(event) => setCommand(event.target.innerText)}
            style="display: flex; align-items: flex-end;"
          >
            <!-- change text color if command exists -->
          </div>

          <!-- <span class="blink">|</span> -->
          <!-- the input should never lose focus -->
          <input
            style="position: absolute; top: -9999px; left: -99999px;"
            id="command-input"
            placeholder=""
            type="text"
            .value=${command}
            @input=${(event) => setCommand(event.target.value)}
          />
        </form>

        <h5>History</h5>
        <ul>
          ${history.map((command) => html`<li>${command}</li>`)}
        </ul>
      </div>
    `;
  }

  customElements.define(
    "app-terminal",
    component(Terminal, {
      useShadowDOM: false,
    })
  );
})();