const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclejj1gaQ0 = await BirdOracle.new({from: accounts[0]});
		const stringpXHic4g = "RW5xSXE2CDl1ONLWHSJXqtGeGjAua3XKRRPHorQiZrEHmrSpEqdwbNlRYSJBQYZgujcGTh3QFAGACQtTruy"
		const stringaiHOyn5 = "rfI2fVYD6ifLb0FULZVg9"
		const stringGC2Lto = "BlU8veE0dijNt3Gvk2AqPXaWCbTNojtrjbb6W7Zd46OJERsKWl4ck1KyJp7MgEn3N9okzIwzF"
		const uintPE2qxu1 = await BirdOraclejj1gaQ0.getRatingByAddressString.call(stringpXHic4g, {from: "0x0000000000000000000000000000000000000001"});
		const 
fMhkJNx = await BirdOraclejj1gaQ0.newChainRequest.call(stringGC2Lto, stringaiHOyn5, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeYnfKxo = await BirdOracle.new({from: accounts[0]});
		const uinty84PaY7 = BigInt("317")
		const stringkX2Uca = "oGVWEBUHPzqlzy5eXFMGl8DIhSSl6pmBN1Kcryvfvd8CtkbXzsD4wJHIk4Go6D2NmKUy9Mp5XIdASp3xsC8sEKkIvJx3"
		const stringSSfBfY = "yAptw2GWBQ83cAi6JlHFEJXf2nnxR5h5m6KxMsPuI3Wen6A55QWTMaDnyPdcB908XbOpSoIS"
		const stringmVdINHy = "klNxb7e4vRb9Ra1FTaAW4ltuy94c5FZfHD3fJHV9EL6452cZIq5wemga5sDJRpFl4NfP"
		const stringulDEjPP = "hhHkW3JKGJovB84TQHoxpL8QUvaQXUsCPcDdPiKvUWZvgmefxVgW"
		const stringcuvvYLT = await BirdOracleeYnfKxo.substring.call(stringkX2Uca, uinty84PaY7, {from: accounts[1]});
		const 
oH3MPkZ = await BirdOracleeYnfKxo.newChainRequest.call(stringmVdINHy, stringSSfBfY, {from: accounts[2]});
		const stringDOiWNk3 = await BirdOracleeYnfKxo.extractAddress.call(stringulDEjPP, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHkZQ9pM = await BirdOracle.new({from: accounts[3]});
		const stringzEXI0gc = "oWT533baG1azFczjyZkEv0bqkBofuiVbrZVY3rQ9CRMp9l4ZXvsLqio9Lm4gz5ssNlT3"
		const uintfiMmQeW = BigInt("1833")
		const stringeYtkYv9 = "hqF5xLIfNT5g9dAiiKcvB07XI8n7zYxM5xOlss4j3CEuvuhsV"
		const addressk2wrO4O = accounts[4]
		const stringfzMf55m = ""
		const uintWLIf06T = await BirdOracleHkZQ9pM.getRatingByAddressString.call(stringzEXI0gc, {from: accounts[4]});
		const stringkBrVbhZ = await BirdOracleHkZQ9pM.substring.call(stringeYtkYv9, uintfiMmQeW, {from: "0x0000000000000000000000000000000000000001"});
		const uintyc3hDrR = await BirdOracleHkZQ9pM.getRatingByAddress.call(addressk2wrO4O, {from: accounts[4]});
		const uintRQ2Kg8H = await BirdOracleHkZQ9pM.getRatingByAddressString.call(stringfzMf55m, {from: accounts[2]});
		const uintnP0dmy5 = await BirdOracleHkZQ9pM.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleljUYygd = await BirdOracle.new({from: accounts[3]});
		const uintchb3y55 = BigInt("357")
		const uintQRMfhr5 = BigInt("1132")
		const stringzydtov9 = "tDGly7EXLWBKVhySF3MTDo8f7XfMQI94tDaFPlP1LWOIr4oRzJrdXMaz65LmdFJykacM"
		const stringIHM09ll = "dS6WA4iWFL3CXzMmET16DByllUuny4ROMHlyXUGQZWcgtEOmBltNOh5ld66z4yPWpO8VhmN8MaG1S0wkF2zYpR4nBycUxlK"
		const uintI41KFUD = BigInt("1171")
		const uintj6jVAu9 = BigInt("1930")
		const stringXIs3Lm4 = "zEYgSoVleUUmp"
		const uintJSGY2sg = BigInt("483")
		const uinttzBx6vW = BigInt("1692")
		const stringzyTKVVl = "5gIlamBiidz6MeKerlI9zYAnuJXVfQxjYKx"
		const 
ku3R520 = await BirdOracleljUYygd.updatedChainRequest.call(uintQRMfhr5, uintchb3y55, {from: accounts[0]});
		const 
yMQkBen = await BirdOracleljUYygd.newChainRequest.call(stringIHM09ll, stringzydtov9, {from: accounts[2]});
		const stringjjjttuk = await BirdOracleljUYygd.substring.call(stringXIs3Lm4, uintj6jVAu9, uintI41KFUD, {from: accounts[3]});
		const stringfh9Q0Av = await BirdOracleljUYygd.substring.call(stringzyTKVVl, uinttzBx6vW, uintJSGY2sg, {from: accounts[1]});
		const uintAORcX3F = await BirdOracleljUYygd.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleG6GDQa1 = await BirdOracle.new({from: accounts[2]});
		const uinthgCkdY = BigInt("2022")
		const stringKtCIbaw = "g3MPDaCq5feCnQAyzdRez1DoxcHrCKEtBOdudgkgKEwMfeEYwYJz1iJM7DBc"
		const uintophvsBr = BigInt("463")
		const uintvNMTYkv = BigInt("37")
		const stringw0OwNJ = "EBbyJ5DhT65QXU26NRi53MQBov1mgkDVlHNpVgcp7Xtpx118gImjucGmwY0tbQFWOtKVrv"
		const stringqlEh65I = "IRvBey6byCa7DYrfyBufqGsWmoqA2qxbcnTjlp8rmBi8inS"
		const stringjQi41BO = await BirdOracleG6GDQa1.substring.call(stringKtCIbaw, uinthgCkdY, {from: accounts[5]});
		const 
bCmoh73 = await BirdOracleG6GDQa1.updatedChainRequest.call(uintvNMTYkv, uintophvsBr, {from: accounts[0]});
		const addressyZmXf8N = await BirdOracleG6GDQa1.parseAddr.call(stringw0OwNJ, {from: accounts[2]});
		const uintjo2HSa = await BirdOracleG6GDQa1.getRating.call({from: accounts[4]});
		const uintNOSji5P = await BirdOracleG6GDQa1.getRatingByAddressString.call(stringqlEh65I, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleaqXVsmH = await BirdOracle.new({from: accounts[2]});
		const uintGFyEGeB = BigInt("1202")
		const uintEyjxiCu = BigInt("543")
		const stringvYCTeP2 = "sC1xTGwgCA6xYBXcSbI"
		const uint2eo1ZM = BigInt("1275")
		const uinti6p3uO1 = BigInt("1849")
		const stringdRmMqZ7 = "p1OLsoCzN4n"
		const addressF2PXKuB = accounts[3]
		const addressys6Go49 = accounts[3]
		const uintWhxKcXb = BigInt("1328")
		const stringxcJKTKG = "GJbF6xn7C3MXD23aPaM1d0nAph7A5CqgxmjuAC3cCYUhhN7AkdVQE2sjOvQD3TiY1gl2bz716ryplpOPeV0hbul"
		const stringi2mKPCQ = await BirdOracleaqXVsmH.substring.call(stringvYCTeP2, uintEyjxiCu, uintGFyEGeB, {from: accounts[4]});
		const 
oVju8my = await BirdOracleaqXVsmH.updatedChainRequest.call(uinti6p3uO1, uint2eo1ZM, {from: accounts[3]});
		const string5MHnZ4 = await BirdOracleaqXVsmH.extractAddress.call(stringdRmMqZ7, {from: accounts[0]});
		const uintJ07Jua0 = await BirdOracleaqXVsmH.getRatingByAddress.call(addressF2PXKuB, {from: accounts[0]});
		const uintpiGe6M = await BirdOracleaqXVsmH.getRatingByAddress.call(addressys6Go49, {from: accounts[3]});
		const stringDVH9KN = await BirdOracleaqXVsmH.substring.call(stringxcJKTKG, uintWhxKcXb, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclercmj58J = await BirdOracle.new({from: accounts[5]});
		const addressZwIykhy = accounts[3]
		const uintCoZmsqo = BigInt("1734")
		const uintH6LJ2ID = BigInt("1963")
		const addressJ6nEEgs = "0x0000000000000000000000000000000000000001"
		const stringuzeTvg4 = "jM2LMhn7uRsYFjpcyUa7rCxfevRJ9AcO2Q50O"
		const uintiIVnWIK = await BirdOraclercmj58J.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const uintCZbMUuK = await BirdOraclercmj58J.getRatingByAddress.call(addressZwIykhy, {from: accounts[2]});
		const 
ITxTq4f = await BirdOraclercmj58J.updatedChainRequest.call(uintH6LJ2ID, uintCoZmsqo, {from: accounts[2]});
		const uintBs5fsGF = await BirdOraclercmj58J.getRatingByAddress.call(addressJ6nEEgs, {from: accounts[3]});
		const uint81qX9T = await BirdOraclercmj58J.getRatingByAddressString.call(stringuzeTvg4, {from: accounts[4]});
		const uintIyAa7xw = await BirdOraclercmj58J.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclenAnkdgO = await BirdOracle.new({from: accounts[4]});
		const uinthDMh1YB = BigInt("857")
		const stringn2uqgqc = "pJNJ9tXYvpswiRPCVHD3htI8LEW1FtYSmaqnlfx2mOdfxVR"
		const stringi0DcJn = "OkpKKvzyaspoxuKko8xgfwu6kfKpsHppw8o347L51c2UwRV1iDZN5DuMrvwpfSgB0EFAi6duu2k"
		const uintyoqRbYH = await BirdOraclenAnkdgO.getRating.call({from: accounts[4]});
		const stringEsSI5ml = await BirdOraclenAnkdgO.substring.call(stringn2uqgqc, uinthDMh1YB, {from: accounts[0]});
		const stringIIGGrtG = await BirdOraclenAnkdgO.extractAddress.call(stringi0DcJn, {from: accounts[2]});
		const uintdG5GUkl = await BirdOraclenAnkdgO.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejj1gaQ0 = await BirdOracle.new({from: accounts[0]});
		const uinttXFL9Y4 = BigInt("342")
		const uintTwTkFuo = BigInt("1172")
		const stringpmosikl = "ob0p072RYSaauZjzSIzsnsdqD6M6Di6qItTmxWp2Gd6yWpsiwA"
		const stringpXHic4g = "RW5xSXE2CDl1ONLWHSJXqtGeGjAua3XKRRPHorQiZrEGmrSpEqdwbNlRYSJBQYZgujcGTh3QFAGACQtTruy"
		const string8USjte = "8"
		const stringaiHOyn5 = "rfI2fVYD6ifLb0FULZVg9"
		const stringGC2Lto = "BlU8veE0dijNt3Gvk2AqPXaWCbTNojtrjbb6W7Zd46OJERsKWl4ck1KyJp7MgEn3N9okzIwzF"
		const stringFlZhyAm = await BirdOraclejj1gaQ0.substring.call(stringpmosikl, uintTwTkFuo, uinttXFL9Y4, {from: accounts[4]});
		const uintPE2qxu1 = await BirdOraclejj1gaQ0.getRatingByAddressString.call(stringpXHic4g, {from: "0x0000000000000000000000000000000000000001"});
		const addresskegz5Y = await BirdOraclejj1gaQ0.parseAddr.call(string8USjte, {from: accounts[1]});
		const 
fMhkJNx = await BirdOraclejj1gaQ0.newChainRequest.call(stringGC2Lto, stringaiHOyn5, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemDGHiSc = await BirdOracle.new({from: accounts[1]});
		const uintaxoCiua = BigInt("1237")
		const stringvzPMY1Z = "ZGz5XOS414g9GKLa5lbi4Bmydv6LXQKAHUg6ArH4m1lgIHdkGuJgYHM23Kk3UQnXjgMIUftyAgpfe"
		const uintKjeuFTt = BigInt("562")
		const uintDZ2e8G3 = BigInt("1965")
		const stringh1gRFTo = "znxMmJ7UUGOBpTqsGeRGy2qMZnz1O3Gfsco"
		const stringSFcxFZH = "QEcKlcCEjQ6JYplx6ROlwUeBVrrArokNhunEjpcoFUJiXw33NdJRc6wa74FqNPzrt9bu6uB46zpxTnf"
		const stringhUl4b7m = "cHI7arqU7X8Tx9KWYKtsv2nGA5M2cDwXhNQC"
		const stringt0eoWPI = await BirdOraclemDGHiSc.substring.call(stringvzPMY1Z, uintaxoCiua, {from: accounts[4]});
		const stringWoWt122 = await BirdOraclemDGHiSc.substring.call(stringh1gRFTo, uintDZ2e8G3, uintKjeuFTt, {from: accounts[1]});
		const 
xDQIdEy = await BirdOraclemDGHiSc.newChainRequest.call(stringhUl4b7m, stringSFcxFZH, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclenTAGBLv = await BirdOracle.new({from: accounts[1]});
		const uintcKoevGM = BigInt("1597")
		const stringmh2k7sY = "kZzhFMH5yKaL5qzJDZORMRQnlFv9FJjknkPASx7AcNuL0W3umcuJcDzKP5Sp1WaesYL"
		const stringNJq8xTx = await BirdOraclenTAGBLv.substring.call(stringmh2k7sY, uintcKoevGM, {from: accounts[2]});
		const uintJDdZanL = await BirdOraclenTAGBLv.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclel3G6gzv = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressP2lPgT = "0x0000000000000000000000000000000000000001"
		const uintrYlIuj0 = BigInt("1167")
		const uintmDrRGvl = BigInt("1928")
		const uintXverkiB = BigInt("1798")
		const stringu63NSvu = "h8wNMmk4dEw73x2ESxljBNEqLSr1xMe6iDvybbvjEYGw73zyEVfFD65haJMWa2DdQyOExl"
		const uintMZ3jva6 = await BirdOraclel3G6gzv.getRatingByAddress.call(addressP2lPgT, {from: accounts[3]});
		const 
B1XLizl = await BirdOraclel3G6gzv.updatedChainRequest.call(uintmDrRGvl, uintrYlIuj0, {from: accounts[4]});
		const stringTULPxGe = await BirdOraclel3G6gzv.substring.call(stringu63NSvu, uintXverkiB, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleaqXVsmH = await BirdOracle.new({from: accounts[2]});
		const stringj207WVE = "c2Jhivm1sawdOCq4DLoIPJda5OtmkLMAAv3hfwpxU2phG9h7VroUDDp9sFf6yrJHeIDuTIDA6a8F7nHFBMU7uE0rour0Y1N"
		const addresspfW5zO = accounts[3]
		const addresshkHuwBI = accounts[3]
		const uintlfE0Qw9 = BigInt("765")
		const stringO1K9DA = "6giJGmuGBReCqlkmGSvHbHw5IL9ycrVChJ4cCdck4H0"
		const addressj2JpNB9 = accounts[3]
		const uintuoZSmEX = BigInt("1610")
		const uintCQQkQPY = BigInt("87")
		const stringioBhe6O = "iTZD5pgYbLImBA57ZsouxEa75wHepU3O9MGDUntLwfmuQyvgcy9y"
		const stringFzewiN = "tVSLmL0F4VW6SYcWXxpKtSQNqhzf4ydwqNYQzaKjm725o9ha"
		const uintNPLxcg8 = BigInt("1038")
		const uintCopDPKQ = BigInt("1180")
		const stringqP6KA9 = "JlPPT6baY7IlEBVmfS6bs4npixzdGgjIlD61kGWo7HM3eFm"
		const uintNI9qjN = await BirdOracleaqXVsmH.getRatingByAddressString.call(stringj207WVE, {from: accounts[4]});
		const uintESimFn6 = await BirdOracleaqXVsmH.getRatingByAddress.call(addresspfW5zO, {from: accounts[2]});
		const uintQxncQAl = await BirdOracleaqXVsmH.getRating.call({from: accounts[5]});
		const uintsI4zR5V = await BirdOracleaqXVsmH.getRating.call({from: accounts[0]});
		const uintfdZkxvj = await BirdOracleaqXVsmH.getRatingByAddress.call(addresshkHuwBI, {from: accounts[4]});
		const stringZal9G1S = await BirdOracleaqXVsmH.substring.call(stringO1K9DA, uintlfE0Qw9, {from: accounts[3]});
		const uintpiGe6M = await BirdOracleaqXVsmH.getRatingByAddress.call(addressj2JpNB9, {from: accounts[3]});
		const 
hDT2b6 = await BirdOracleaqXVsmH.updatedChainRequest.call(uintCQQkQPY, uintuoZSmEX, {from: accounts[0]});
		const 
P2Vd7pQ = await BirdOracleaqXVsmH.newChainRequest.call(stringFzewiN, stringioBhe6O, {from: accounts[5]});
		const stringfWCpVPo = await BirdOracleaqXVsmH.substring.call(stringqP6KA9, uintCopDPKQ, uintNPLxcg8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejj1gaQ0 = await BirdOracle.new({from: accounts[0]});
		const uintsDrc7bc = BigInt("683")
		const uintkk1Vk0v = BigInt("683")
		const stringqSzRr2E = "cXYROoBRMh4MJ63sXG2aCD8nW6VXeYttL6WgEO8MatB9tYgj9qcjW"
		const stringJoKfuge = "YcEMah5nhR9anob5cMbvwaSN7z"
		const stringAf9Pofn = await BirdOraclejj1gaQ0.substring.call(stringqSzRr2E, uintkk1Vk0v, uintsDrc7bc, {from: accounts[3]});
		const stringHK9shAw = await BirdOraclejj1gaQ0.extractAddress.call(stringJoKfuge, {from: accounts[0]});
	});
})