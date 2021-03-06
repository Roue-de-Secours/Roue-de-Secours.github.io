function extracted() {
    scratchblocks.loadLanguages({
        fr: {
            commands: {
                "turn %m.motor on": "allumer le %m.motor",
                show: "montrer",
                "switch backdrop to %m.backdrop and wait": "basculer sur l'arrière-plan %m.backdrop et attendre",
                "repeat until %b": "répéter jusqu’à %b",
                "play note %d.note for %n beats": "jouer la note %d.note pendant %n temps",
                "show variable %m.var": "montrer la variable %m.var",
                "turn %m.motor off": "arrêter le %m.motor",
                "set pen color to %c": "mettre la couleur du stylo à %c",
                "set pen color to %n": "mettre la couleur du stylo à %n",
                "change %m.effect effect by %n": "ajouter à l'effet %m.effect %n",
                "say %s": "dire %s",
                "go to x:%n y:%n": "aller à x:%n y:%n",
                "if %b then": "si %b alors",
                "pen up": "relever le stylo",
                "sensor %m.booleanSensor?": "capteur %m.booleanSensor activé?",
                "%n mod %n": "%n modulo %n",
                "turn @turnLeft %n degrees": "tourner @turnLeft de %n degrés",
                "touching color %c?": "couleur %c touchée?",
                "mouse x": "souris x",
                "mouse y": "souris y",
                "item %d.listItem of %m.list": "élément %d.listItem de %m.list",
                "stop all sounds": "arrêter tous les sons",
                "not %b": "non %b",
                "next backdrop": "arrière-plan suivant",
                "set volume to %n%": "mettre le volume au niveau %n%",
                "move %n steps": "avancer de %n ",
                "say %s for %n secs": "dire %s pendant %n secondes",
                "backdrop name": "nom de l'arrière-plan",
                "%m.list contains %s?": "%m.list contient %s?",
                "days since 2000": "jours depuis 2000",
                "hide list %m.list": "cacher la liste %m.list",
                "set %m.effect effect to %n": "mettre l'effet %m.effect à %n",
                "backdrop #": "arrière-plan #",
                "play sound %m.sound until done": "jouer le son %m.sound jusqu'au bout",
                "set video transparency to %n%": "mettre la transparence vidéo à %n%",
                "show list %m.list": "montrer la liste %m.list",
                "touching %m.touching?": "%m.touching touché?",
                "set %m.motor power to %n": "fixer %m.motor à la puissance %n",
                "color %c is touching %c?": "couleur %c touche %c?",
                "change pen size by %n": "ajouter %n à la taille du stylo",
                hide: "cacher",
                "turn video %m.videoState": "activer la vidéo %m.videoState",
                "set tempo to %n bpm": "mettre le tempo à %n bpm",
                "hide variable %m.var": "cacher la variable %m.var",
                "y position": "ordonnée y",
                "rest for %n beats": "faire une pause pour %n temps",
                "turn @turnRight %n degrees": "tourner @turnRight de %n degrés",
                "play sound %m.sound": "jouer le son %m.sound",
                "when %m.key key pressed": "quand %m.key est pressé",
                tempo: "tempo",
                "think %s": "penser à %s",
                "when I receive %m.broadcast": "quand je reçois %m.broadcast",
                "switch costume to %m.costume": "basculer sur le costume %m.costume",
                "when tilt %m.eNe %n": "quand l'inclinaison %m.eNe %n",
                "pen down": "stylo en position d'écriture",
                "go to %m.location": "aller à %m.location",
                "point towards %m.spriteOrMouse": "s'orienter vers %m.spriteOrMouse",
                "distance to %m.spriteOrMouse": "distance de %m.spriteOrMouse",
                timer: "chronomètre",
                "set rotation style %m.rotationStyle": "fixer le sens de rotation %m.rotationStyle",
                "switch backdrop to %m.backdrop": "basculer sur l'arrière-plan %m.backdrop",
                loudness: "volume sonore",
                "turn %m.motor on for %n secs": "allumer le %m.motor pour %n secs",
                "add %s to %m.list": "ajouter %s à %m.list",
                "replace item %d.listItem of %m.list with %s": "remplacer l'élément %d.listItem de la liste %m.list par %s",
                "%m.mathOp of %n": "%m.mathOp de %n",
                "when this sprite clicked": "quand ce lutin est cliqué",
                "play drum %d.drum for %n beats": "jouer du tambour %d.drum pendant %n temps",
                "set x to %n": "donner la valeur %n à x",
                size: "taille",
                "set size to %n%": "mettre à %n % de la taille initiale",
                stamp: "estampiller",
                "change size by %n": "ajouter %n à la taille",
                "set %m.var to %s": "mettre %m.var à %s",
                "set y to %n": "donner la valeur %n à y",
                "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",
                "set pen shade to %n": "mettre l'intensité du stylo à %n",
                "%b and %b": "%b et %b",
                username: "nom d'utilisateur",
                "length of %s": "longueur de %s",
                direction: "direction",
                "go back %n layers": "déplacer de %n plans arrière",
                "%m.sensor sensor value": "valeur du capteur %m.sensor",
                "set instrument to %d.instrument": "choisir l'instrument n° %d.instrument",
                else: "sinon",
                volume: "volume",
                "round %n": "arrondi de %n",
                "set %m.motor2 direction to %m.motorDirection": "fixer la direction de %m.motor2 en sens %m.motorDirection",
                "insert %s at %d.listItem of %m.list": "insérer %s en position %d.listItem de la liste %m.list",
                distance: "distance",
                "broadcast %m.broadcast": "envoyer à tous %m.broadcast",
                "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType sur %m.stageOrThis",
                "costume #": "costume #",
                "length of %m.list": "longueur de %m.list",
                "go to front": "aller au premier plan",
                "change volume by %n": "ajouter %n au volume",
                "when distance %m.lessMore %n": "quand la distance %m.lessMore %n",
                "delete this clone": "supprimer ce clone",
                "change y by %n": "ajouter %n à y",
                "next costume": "costume suivant",
                "letter %n of %s": "lettre %n de %s",
                "%b or %b": "%b ou %b",
                "delete %d.listDeleteItem of %m.list": "supprimer l'élément %d.listDeleteItem de la liste %m.list",
                "when %m.sensor %m.lessMore %n": "quand %m.sensor %m.lessMore %n",
                "point in direction %d.direction": "s'orienter à %d.direction",
                "clear graphic effects": "annuler les effets graphiques",
                "join %s %s": "regroupe %s %s",
                "when %m.booleanSensor": "quand %m.booleanSensor",
                "change %m.var by %n": "ajouter à %m.var %n",
                "when I start as a clone": "quand je commence comme un clone",
                "when %m.triggerSensor > %n": "quand %m.triggerSensor > %n",
                end: "fin",
                "pick random %n to %n": "nombre aléatoire entre %n et %n",
                tilt: "inclinaison",
                "change tempo by %n": "ajouter %n au tempo",
                "change pen color by %n": "ajouter %n à la couleur du stylo",
                "set pen size to %n": "mettre la taille du stylo à %n",
                "broadcast %m.broadcast and wait": "envoyer à tous %m.broadcast et attendre",
                answer: "réponse",
                "change pen shade by %n": "ajouter %n à l'intensité du stylo",
                "wait %n secs": "attendre %n secondes",
                "current %m.timeAndDate": "actuel %m.timeAndDate",
                "think %s for %n secs": "penser à %s pendant %n secondes",
                "change x by %n": "ajouter %n à x",
                "glide %n secs to x:%n y:%n": "glisser en %n secondes à x:%n y:%n",
                "wait until %b": "attendre jusqu’à %b",
                "x position": "abscisse x",
                "mouse down?": "souris pressée?",
                "key %m.key pressed?": "touche %m.key pressée?",
                "repeat %n": "répéter %n fois",
                "if on edge, bounce": "rebondir si le bord est atteint",
                forever: "répéter indéfiniment",
                "ask %s and wait": "demander %s et attendre",
                clear: "effacer tout",
                "create clone of %m.spriteOnly": "créer un clone de %m.spriteOnly",
                "reset timer": "réinitialiser le chronomètre",
                "when backdrop switches to %m.backdrop": "quand l'arrière-plan bascule sur %m.backdrop",
                "stop %m.stop": "stop %m.stop",
                "when @greenFlag clicked": "quand @greenFlag est cliqué"
            },
            osis: ["autres scripts du lutin", "autres scripts"],
            ignorelt: [null],
            dropdowns: {
                "C connected": "C connecté",
                all: "tout",
                "other scripts in sprite": "autres scripts du lutin",
                color: "couleur",
                year: "année",
                "mouse-pointer": "pointeur de souris",
                month: "mois",
                "B connected": "B connecté",
                second: "seconde",
                "up arrow": "flèche haut",
                "don't rotate": "ne pivote pas",
                pixelate: "pixeliser",
                fisheye: "oeil de poisson",
                "resistance-D": "Resistance-D",
                whirl: "tournoyer",
                "resistance-A": "Resistance-A",
                "previous backdrop": "arrière-plan précédent",
                "resistance-C": "Resistance-C",
                sound: "son",
                mosaic: "mosaïque",
                "A connected": "A connecté",
                "that way": "lòt bò a",
                Stage: "Scène",
                "left-right": "position à gauche ou à droite",
                "left arrow": "flèche gauche",
                "video motion": "mouvement vidéo",
                "this way": "bò sa a",
                "day of week": "jour de la semaine",
                "right arrow": "flèche droite",
                slider: "potentiomètre",
                "D connected": "D connecté",
                "this script": "ce script",
                date: "date",
                "all around": "à 360°",
                minute: "minute",
                reverse: "inversé",
                ghost: "fantôme",
                on: "Activé",
                myself: "moi-même",
                off: "Désactivé",
                "resistance-B": "Resistance-B",
                hour: "heure",
                brightness: "luminosité",
                "button pressed": "bouton pressé",
                light: "lumière",
                "random position": "Position aléatoire",
                space: "espace",
                "this sprite": "ce lutin",
                "down arrow": "flèche bas",
                "on-flipped": "effet miroir",
                motion: "mouvement",
                edge: "bord"
            },
            define: ["définir"],
            palette: {
                Sound: "Sons",
                Control: "Contrôle",
                "More Blocks": "Ajouter blocs",
                Sensing: "Capteurs",
                variables: null,
                Operators: "Opérateurs",
                list: "liste",
                lists: null,
                Motion: "Mouvement",
                Pen: "Stylo",
                Looks: "Apparence",
                variable: "variable",
                Tips: "Conseils",
                Data: "Données",
                Events: "Événements"
            },
            math: ["asin", "cos", "plafond", "atan", "ln", "acos", "plancher", "e ^", "abs", "10^", "tan", "sin", "racine", "log"],
            aliases: {
                "tourner gauche de %n degrés": "turn @turnLeft %n degrees",
                "quand le drapeau vert pressé": "when @greenFlag clicked",
                "tourner droite de %n degrés": "turn @turnRight %n degrees"
            }
        }
    });
}
    extracted();