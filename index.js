#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const Data = [
    {
        A: {
            text: "Have a human body with anime eyes",
        },
        B: {
            text: "Have an anime body with human eyes",
        },
    },
    {
        A: {
            text: "Carry a Death Note",
        },
        B: {
            text: "Power of Geass",
        },
    },
    {
        A: {
            text: "Be like Kageyama",
        },
        B: {
            text: "Be like Hinata",
        },
    },
    {
        A: {
            text: "Watch Naruto for rest of life",
        },
        B: {
            text: "Watch AOT for rest of life",
        },
    },
    {
        A: {
            text: "Be a voice actor in your favorite anime",
        },
        B: {
            text: "Be able to draw together with your favorite manga artist",
        },
    },
    {
        A: {
            text: "Be in the Shingeki no Kyojin universe",
        },
        B: {
            text: "In the One Punch Man universe",
        },
    },
    {
        A: {
            text: "Be a Shinobi in Naruto",
        },
        B: {
            text: "Z-fighter in Dragon Ball Z",
        },
    },
    {
        A: {
            text: "Have alchemist powers",
        },
        B: {
            text: "Be able to turn into a titan",
        },
    },
    {
        A: {
            text: "Have the power of a sharingan",
        },
        B: {
            text: "Have the power of a Nine-tails",
        },
    },
    {
        A: {
            text: "Have a world full of only yoai couples",
        },
        B: {
            text: "have only world full of yuri couples",
        },
    },
    {
        A: {
            text: "Be friends with a Shinigami and use a death note",
        },
        B: {
            text: "Be trapped in the world of SAO and meet your soul/best friend and make it out alive",
        },
    },
    {
        A: {
            text: "Save Rei (High School of the Dead)",
        },
        B: {
            text: "Join Light and use the death note (Death not)",
        },
    },
    {
        A: {
            text: "Meet Soul, Deathe the kid, and Black Star (Soul Eater)",
        },
        B: {
            text: "Meet Chi and Hideki (Chobits)",
        },
    },
    {
        A: {
            text: "Clean with Levi (Attack on Titan)",
        },
        B: {
            text: '"Accidentaly" steal Honey-senpai bunny (Ouran High School Host Club)',
        },
    },
    {
        A: {
            text: "Tell Prussia he isn't awesome",
        },
        B: {
            text: "Train with Sakura",
        },
    },
    {
        A: {
            text: "Fight Natsu (Fairy tail)",
        },
        B: {
            text: "Battle Ash with Pikachu (Pokemon)",
        },
    },
    {
        A: {
            text: "Have Squid Girl's power (Squid Girl) ",
        },
        B: {
            text: "Be the son/daughter of Satan and be Rin's brother/sister (Blue Exorcist)",
        },
    },
    {
        A: {
            text: "Be friends with Nezumi (Rat) and Shion (No. 6)",
        },
        B: {
            text: "Go to the carnival with your least favourite character ans slowly start a friendship",
        },
    },
    {
        A: {
            text: "Be a Neko",
        },
        B: {
            text: "Be in a relationship with a Yandere Anime character",
        },
    },
    {
        A: {
            text: "Give up your favourite anime forever",
        },
        B: {
            text: "Watch an episode where your favourite character dies",
        },
    },
    {
        A: {
            text: "Dance with your favourite character",
        },
        B: {
            text: "Have your own Chibi friend that helps you in everyday life",
        },
    },
    {
        A: {
            text: "Have to assissinate Koro Sensei (Assasiantion classroom)",
        },
        B: {
            text: "Fight a Titan with Mikasa, Eren and Armin (Attack on Titan)",
        },
    },
    {
        A: {
            text: "Have your story turned into an anime?",
        },
        B: {
            text: "Be best friends with your favourite anime character",
        },
    },
    {
        A: {
            text: "Battle Yugi, Katsuya, and Seton from Yu-Gi-Oh",
        },
        B: {
            text: "Be the next Sailor Scout for a planet (Sailor Moon)",
        },
    },
    {
        A: {
            text: "Save Naomi and let her reunite with everyone from Corpse Party",
        },
        B: {
            text: "Watch the Clannad Afterstory episode with your family where Ushio ",
        },
    },
    {
        A: {
            text: "Be a new character in an anime but be the antagonist that everyone hates",
        },
        B: {
            text: "Be a new character but die in the episode you were aired in and be loved by many fans anyways",
        },
    },
    {
        A: {
            text: "Skate in the championships with Yuri and Victor as their student",
        },
        B: {
            text: "Yuri and Victor teach you to skate",
        },
    },
    {
        A: {
            text: "Train under the wing of Saitama",
        },
        B: {
            text: "Train under the wing of Genos",
        },
    },
    {
        A: {
            text: "Become a magical girl and have your greatest wish come true",
        },
        B: {
            text: "Aid magical girls in their quests as a regular girl",
        },
    },
    {
        A: {
            text: "Be able to catch real Pokémon?",
        },
        B: {
            text: "Be able to go Super Saiyan?",
        },
    },
    {
        A: {
            text: "live in Sword Art Online",
        },
        B: {
            text: "No Game No Life",
        },
    },
    {
        A: {
            text: "Have Shinji follow you around and whine all the time?",
        },
        B: {
            text: "Have Chi Chi yell at you about studying all the time?",
        },
    },
    {
        A: {
            text: "Eat a devil fruit (One Piece)",
        },
        B: {
            text: "Be one of the dragon slayers (Fairy tail)",
        },
    },
    {
        A: {
            text: "Own a Death Note ",
        },
        B: {
            text: "Own a Future Diary(Mirai Nikki)",
        },
    },
    {
        A: {
            text: "Have a super strong quirk but be a villain",
        },
        B: {
            text: "Have a super strong quirk but be a villain",
        },
    },
    {
        A: {
            text: "Be the hokage without friends",
        },
        B: {
            text: "Be the weakest ninja with hundreds of friends",
        },
    },
    {
        A: {
            text: "Kill one of your classmates",
        },
        B: {
            text: "Being killed by one of your classmates",
        },
    },
    {
        A: {
            text: "Be supertalented at voleyball but play with your least favourite team",
        },
        B: {
            text: "Be the worst player possible but play with your favourite team (Haikyuu)",
        },
    },
    {
        A: {
            text: "Watch Pupa with your classmates  ",
        },
        B: {
            text: "Watch High School DxD with your parentsm",
        },
    },
    {
        A: {
            text: "Marry your anime husbando/waifu",
        },
        B: {
            text: "Gain any power you want(only one tho)",
        },
    },
    {
        A: {
            text: "Create your own anime",
        },
        B: {
            text: "Create your own manga",
        },
    },
];

let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();
    figlet(`Anime Name Game:`, (err, data) => console.log(data));

    console.log(`
    ${chalk.bgBlue("HOW TO PLAY")} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed("killed")}
    So get all the questions right...
  `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await sleep();

    if (isCorrect) {
        spinner.success({
            text: `Nice work ${playerName}. That's a correct answer`,
        });
    } else {
        spinner.error({
            text: `💀💀💀 Game over, you lose ${playerName}!`,
        });
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "Enter your name?",
        default() {
            return "Player";
        },
    });

    playerName = answers.player_name;
}

function winner() {
    console.clear();

    figlet(`BYE`, (err, data) => {
        console.log(data + "\n");
        console.log(
            chalk.green(
                `Programming isn't about what you know; it's about making the command line look cool`
            )
        );
        process.exit(0);
    });
}

async function question(index) {
    console.clear();
    return await inquirer.prompt({
        name: "question",
        type: "list",
        message: "Would you rather \n",
        choices: [Data[index].A.text, Data[index].B.text],
    });

    // return
    // handleAnswer(answers.question_1 === 'A');
}

// console.clear();
await welcome();
// await askName();
const init = Math.floor(Math.random() * (Data.length - 10 + 1)) + 0;

for (var i = init; i < init + 10; i++) {
    await question(i);
}

winner();
