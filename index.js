#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const Data = [
    {
        A: {
            text: 'Have a human body with anime eyes', percentage: 49
        },
        B: {
            text: 'Have an anime body with human eyes', percentage: 51
        }
    },
    {
        A: {
            text: 'Carry a Death Note', percentage: 40
        },
        B: {
            text: 'Power of Geass', percentage: 60
        }
    },
    {
        A: {
            text: 'Be like Kageyama', percentage: 40
        },
        B: {
            text: 'Be like Hinata', percentage: 60
        }
    },
    {
        A: {
            text: 'Watch Naruto for rest of life', percentage: 70
        },
        B: {
            text: 'Watch AOT for rest of life', percentage: 30
        }
    },
    {
        A: {
            text: 'Be a voice actor in your favorite anime', percentage: 40
        },
        B: {
            text: 'Be able to draw together with your favorite manga artist',
            percentage: 60
        }
    },
    {
        A: {
            text: 'Be in the Shingeki no Kyojin universe', percentage: 70
        },
        B: {
            text: 'In the One Punch Man universe', percentage: 30
        }
    },
    {
        A: {
            text: 'Be a Shinobi in Naruto', percentage: 70
        },
        B: {
            text: 'Z-fighter in Dragon Ball Z', percentage: 30
        }
    },
    {
        A: {
            text: 'Have alchemist powers', percentage: 70
        },
        B: {
            text: 'Be able to turn into a titan', percentage: 30
        }
    },
    {
        A: {
            text: 'Have the power of a sharingan', percentage: 89
        },
        B: {
            text: 'Have the power of a Nine-tails', percentage: 11
        }
    },
    {
        A: {
            text: 'Have a world full of only yoai couples', percentage: 11
        },
        B: {
            text: 'have only world full of yuri couples', percentage: 89
        }
    },
    {
        A: {
            text: 'Be friends with a Shinigami and use a death note',
            percentage: 11
        },
        B: {
            text: 'Be trapped in the world of SAO and meet your soul/best friend and make it out alive',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Save Rei (High School of the Dead)', percentage: 11
        },
        B: {
            text: 'Join Light and use the death note (Death not)', percentage: 89
        }
    },
    {
        A: {
            text: 'Meet Soul, Deathe the kid, and Black Star (Soul Eater)',
            percentage: 11
        },
        B: {
            text: 'Meet Chi and Hideki (Chobits)', percentage: 89
        }
    },
    {
        A: {
            text: 'Clean with Levi (Attack on Titan)', percentage: 11
        },
        B: {
            text: '"Accidentaly" steal Honey-senpai bunny (Ouran High School Host Club)',
            percentage: 89
        }
    },
    {
        A: {
            text: "Tell Prussia he isn't awesome", percentage: 11
        },
        B: {
            text: 'Train with Sakura', percentage: 89
        }
    },
    {
        A: {
            text: 'Fight Natsu (Fairy tail)', percentage: 11
        },
        B: {
            text: 'Battle Ash with Pikachu (Pokemon)', percentage: 89
        }
    },
    {
        A: {
            text: "Have Squid Girl's power (Squid Girl) ", percentage: 11
        },
        B: {
            text: "Be the son/daughter of Satan and be Rin's brother/sister (Blue Exorcist)",
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be friends with Nezumi (Rat) and Shion (No. 6)', percentage: 11
        },
        B: {
            text: 'Go to the carnival with your least favourite character ans slowly start a friendship',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be a Neko', percentage: 11
        },
        B: {
            text: 'Be in a relationship with a Yandere Anime character',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Give up your favourite anime forever', percentage: 11
        },
        B: {
            text: 'Watch an episode where your favourite character dies',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Dance with your favourite character', percentage: 11
        },
        B: {
            text: 'Have your own Chibi friend that helps you in everyday life',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Have to assissinate Koro Sensei (Assasiantion classroom)',
            percentage: 11
        },
        B: {
            text: 'Fight a Titan with Mikasa, Eren and Armin (Attack on Titan)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Have your story turned into an anime?', percentage: 11
        },
        B: {
            text: 'Be best friends with your favourite anime character',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Battle Yugi, Katsuya, and Seton from Yu-Gi-Oh', percentage: 11
        },
        B: {
            text: 'Be the next Sailor Scout for a planet (Sailor Moon)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Save Naomi and let her reunite with everyone from Corpse Party',
            percentage: 11
        },
        B: {
            text: 'Watch the Clannad Afterstory episode with your family where Ushio ',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be a new character in an anime but be the antagonist that everyone hates',
            percentage: 11
        },
        B: {
            text: 'Be a new character but die in the episode you were aired in and be loved by many fans anyways',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Skate in the championships with Yuri and Victor as their student',
            percentage: 11
        },
        B: {
            text: 'Yuri and Victor teach you to skate',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Train under the wing of Saitama', percentage: 11
        },
        B: {
            text: 'Train under the wing of Genos',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Become a magical girl and have your greatest wish come true',
            percentage: 11
        },
        B: {
            text: 'Aid magical girls in their quests as a regular girl',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be able to catch real Pokémon?',
            percentage: 63
        },
        B: {
            text: 'Be able to go Super Saiyan?',
            percentage: 37
        }
    },
    {
        A: {
            text: 'live in Sword Art Online',
            percentage: 64
        },
        B: {
            text: 'No Game No Life',
            percentage: 36
        }
    },
    {
        A: {
            text: 'Have Shinji follow you around and whine all the time?',
            percentage: 60
        },
        B: {
            text: 'Have Chi Chi yell at you about studying all the time?',
            percentage: 40
        }
    },
    {
        A: {
            text: 'Eat a devil fruit (One Piece)',
            percentage: 11
        },
        B: {
            text: 'Be one of the dragon slayers (Fairy tail)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Own a Death Note ',
            percentage: 11
        },
        B: {
            text: 'Own a Future Diary(Mirai Nikki)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Have a super strong quirk but be a villain',
            percentage: 11
        },
        B: {
            text: 'Have a super strong quirk but be a villain',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be the hokage without friends',
            percentage: 92
        },
        B: {
            text: 'Be the weakest ninja with hundreds of friends',
            percentage: 8
        }
    },
    {
        A: {
            text: 'Kill one of your classmates',
            percentage: 11
        },
        B: {
            text: 'Being killed by one of your classmates',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Be supertalented at voleyball but play with your least favourite team',
            percentage: 11
        },
        B: {
            text: 'Be the worst player possible but play with your favourite team (Haikyuu)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Watch Pupa with your classmates  ',
            percentage: 11
        },
        B: {
            text: 'Watch High School DxD with your parentsm',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Marry your anime husbando/waifu',
            percentage: 11
        },
        B: {
            text: 'Gain any power you want(only one tho)',
            percentage: 89
        }
    },
    {
        A: {
            text: 'Create your own anime',
            percentage: 11
        },
        B: {
            text: 'Create your own manga',
            percentage: 89
        }
    }
]


let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {

    console.clear();
    figlet(`Anime Name Game:`, (err, data) => console.log(data));


    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a correct answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Enter your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

function winner() {
    console.clear();

    figlet(`BYE`, (err, data) => {
        console.log(data + '\n');
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
        name: 'question',
        type: 'list',
        message: 'Would you rather \n',
        choices: [
            Data[index].A.text,
            Data[index].B.text,
        ],
    });

    // return
    // handleAnswer(answers.question_1 === 'A');
}

// console.clear();
await welcome();
// await askName();
const init = Math.floor(Math.random() * (Data.length - 10 + 1)) + 0;


for (var i = init; i < init + 10; i++) {
    await question(i)
}

winner();