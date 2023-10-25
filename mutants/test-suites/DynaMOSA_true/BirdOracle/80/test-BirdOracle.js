const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleKv2kxGi = await BirdOracle.new({from: accounts[2]});
		const uintJsvm9c8 = BigInt("1600")
		const uinteUHpch = BigInt("1127")
		const stringl4Xku7U = "2VNnQsA5lJg5W1WKKBqhsiFGh1PJvj3UHxNvGTZyNFlpuf3OsLrxozH7CNGGgSxplJh1I5uY52LjoZHLKpAhMhw"
		const uintM54TKGE = BigInt("262")
		const stringitxIT9W = "K7XbATIo"
		const addressYWxiNs6 = accounts[1]
		const stringRFbBtBw = "jatdePz0KhlhT5rgKdGU3FkAh7WJ5e6RWIyc7JiGh5XGPcEPzj11px5YHGXnWRR38J2XTbL5Pz"
		const uintoF6x2Z5 = BigInt("2025")
		const stringhkl8H2 = "UnblvKNJ9xHyCeYxPVjUsWhJHUXhES6KBjg2Cuy8psklihKxytGS40wBsjjOnVS75wYYiGz3Hcp2kYF1PCoGT"
		const stringJPFIkw0 = await BirdOracleKv2kxGi.substring.call(stringl4Xku7U, uinteUHpch, uintJsvm9c8, {from: accounts[2]});
		const stringBViAMM7 = await BirdOracleKv2kxGi.substring.call(stringitxIT9W, uintM54TKGE, {from: accounts[0]});
		const uintloKkfqL = await BirdOracleKv2kxGi.getRatingByAddress.call(addressYWxiNs6, {from: accounts[5]});
		const stringM5REswT = await BirdOracleKv2kxGi.extractAddress.call(stringRFbBtBw, {from: accounts[4]});
		const stringnCSq1rW = await BirdOracleKv2kxGi.substring.call(stringhkl8H2, uintoF6x2Z5, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleoedbll6 = await BirdOracle.new({from: accounts[0]});
		const uintNka85t2 = BigInt("3")
		const stringmWus2eI = "GFMbaPIcO2sVMdyms5pfg8ctDJ5RCGQzhWdELYR6sCDorHpdeJJ5N5PvfSZ41oEOczxCFw4q77lF3Ux5mbXD8t"
		const uintbVbtCb = BigInt("481")
		const stringGoQYWAD = "u11CVFyH5E5ydJKVxhFXgbnWH9L8W133A25gJYG7qlASVGifOv7ocKEtjU7VYh8jzcc2tESviohQ"
		const stringQw0ZkL = "JeClDvhkv4IiAUMjfgMFD48eSAXdclloSBY1Az4jS31ORRUJ8COAGWKchgM4qW"
		const stringiRInH27 = await BirdOracleoedbll6.substring.call(stringmWus2eI, uintNka85t2, {from: accounts[3]});
		const stringqeII5yo = await BirdOracleoedbll6.substring.call(stringGoQYWAD, uintbVbtCb, {from: accounts[1]});
		const stringCmw5Cp = await BirdOracleoedbll6.extractAddress.call(stringQw0ZkL, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKy3xgvc = await BirdOracle.new({from: accounts[4]});
		const stringXQXGlM = "lT8UtJRn8cC5YVgXffGMqJ"
		const uintUKiXIth = BigInt("1487")
		const uintikzkT7A = BigInt("1245")
		const stringRCK4zgo = "NZDqGTn9rBZXBN2LvbqBhYF5IlBR4qaGp26Sm6Aj5gYho9BzIFWO1zNfc89wiKXzsrOyx4N1rdAwzab"
		const stringA21OB7H = "b1WnlfPDY7B7fXrcX6"
		const stringl09I0Wh = await BirdOracleKy3xgvc.extractAddress.call(stringXQXGlM, {from: "0x0000000000000000000000000000000000000001"});
		const stringsGlSS2x = await BirdOracleKy3xgvc.substring.call(stringRCK4zgo, uintikzkT7A, uintUKiXIth, {from: accounts[3]});
		const addressWRcWcJA = await BirdOracleKy3xgvc.parseAddr.call(stringA21OB7H, {from: "0x0000000000000000000000000000000000000001"});
		const uintvMzfoyw = await BirdOracleKy3xgvc.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleCVPNnjp = await BirdOracle.new({from: accounts[0]});
		const stringeRn1FJA = "OO6SYhwOTB2VraqfJlFILS6zNMzvFgkVvfMoRKMBOwUcuxvJBO74Gtmr2aIwqWMRnyg7auocsdEgjHtznUILuXvkajYTQx"
		const uintw0QbMqa = BigInt("335")
		const uintEftTU4Z = BigInt("1518")
		const stringx1GtjbU = "zjcClJu1K8NOhu1yqE27x99wR8Tc5Q9LmOLlKQahtmx2w2ywlgrvmwoI1fUX86PDfjg9HvNCHaCcDHdhvMDbBV3OEe"
		const stringzrcqjRR = "F4DHaQ6LTK0kLQJXn3Y7vNWUWyi6HJvyidyPf72"
		const stringTfrdIR = "eY5CyD4DVCgOUOwAiIUY7J9c15ZOrSh"
		const addressZD6IGJB = accounts[4]
		const uintvcDMVlr = await BirdOracleCVPNnjp.getRating.call({from: accounts[3]});
		const stringgQs8rb = await BirdOracleCVPNnjp.extractAddress.call(stringeRn1FJA, {from: accounts[3]});
		const stringfzVf6N = await BirdOracleCVPNnjp.substring.call(stringx1GtjbU, uintEftTU4Z, uintw0QbMqa, {from: accounts[3]});
		const 
YMFnn0k = await BirdOracleCVPNnjp.newChainRequest.call(stringTfrdIR, stringzrcqjRR, {from: accounts[0]});
		const uintjQfJE30 = await BirdOracleCVPNnjp.getRatingByAddress.call(addressZD6IGJB, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclee7ia8uB = await BirdOracle.new({from: accounts[0]});
		const stringD0yZrHM = "LPyM4LN9L47plFJwvgPOvA7G5ATvO5u5dGbll9IHuuCePr"
		const stringkgMCZXt = "CjblazDMwW63c111P5CUrssWJ"
		const stringCLbw6QF = "n8jeR2wdpIL5UdoAEqHvrcoGsxcKB"
		const addressRAZxFn = accounts[5]
		const uintzch3FIb = await BirdOraclee7ia8uB.getRatingByAddressString.call(stringD0yZrHM, {from: "0x0000000000000000000000000000000000000001"});
		const 
jre3WL = await BirdOraclee7ia8uB.newChainRequest.call(stringCLbw6QF, stringkgMCZXt, {from: accounts[0]});
		const uintVUeIA4 = await BirdOraclee7ia8uB.getRatingByAddress.call(addressRAZxFn, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA9qk9jm = await BirdOracle.new({from: accounts[0]});
		const uintgtOoGuM = BigInt("504")
		const uintgShQVkG = BigInt("507")
		const stringLjc9WCT = "yjrAA58kJ9eIC8rQciOaYpPPAS3SIMSjthRAXB15Q8Nohq1chf8eMgvCuv9vCDRVzaDvIyTbPGqng6"
		const stringoBxQgRN = "3dWSqC0aXqHgOcYjookV8FA"
		const stringssFhdYu = "eZIoFsH6ouuNjyvrhVkI"
		const stringYoTjRz = "asjmfbDeCUamWQHz59Qrp9lnJrq4NoQ4UW7dXGu1pc9O3lA5MRH0ebi6S2aD7WRRnYsN2dtPN4WreNpR"
		const stringuaTTl5Z = "J0kXXvlRgx6"
		const addressp6q54SX = accounts[2]
		const stringOuVTfO = await BirdOracleA9qk9jm.substring.call(stringLjc9WCT, uintgShQVkG, uintgtOoGuM, {from: accounts[4]});
		const 
BLmA3A = await BirdOracleA9qk9jm.newChainRequest.call(stringssFhdYu, stringoBxQgRN, {from: accounts[1]});
		const uintNo9o1Vb = await BirdOracleA9qk9jm.getRatingByAddressString.call(stringYoTjRz, {from: accounts[1]});
		const addressE6EYOBt = await BirdOracleA9qk9jm.parseAddr.call(stringuaTTl5Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintyKCQ8YY = await BirdOracleA9qk9jm.getRatingByAddress.call(addressp6q54SX, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeC4fY8W = await BirdOracle.new({from: accounts[3]});
		const uintwxe4JP3 = BigInt("1539")
		const stringtfNj996 = "N9E2KZLVfV63xibYpR6engDbOl7oISdwHcXSvD"
		const addressdGkPD7n = accounts[3]
		const stringSdsZHp = await BirdOracleeC4fY8W.substring.call(stringtfNj996, uintwxe4JP3, {from: accounts[1]});
		const uintCTXPGbj = await BirdOracleeC4fY8W.getRatingByAddress.call(addressdGkPD7n, {from: accounts[0]});
		const uintn4jVYqM = await BirdOracleeC4fY8W.getRating.call({from: accounts[3]});
		const uintu0yqm9h = await BirdOracleeC4fY8W.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelABYTmB = await BirdOracle.new({from: accounts[3]});
		const uintE4iiPs4 = BigInt("687")
		const uintugXKNuS = BigInt("1915")
		const addressIW8vFFb = accounts[3]
		const stringupVWKOm = "meFyUWodUQa"
		const stringqknVGxI = "fCQcLN7nxXuCQSz6vGA4rG4ipvJEkdTbseIBNUgFI4ak6Npa9l2WkSmXmIfXJ9ffdwbFTpjh881NzThtDoGdmzdc2X18"
		const stringEQKHDaG = "YNQRa6ryjwxPhQjJI1OSwMdF4Kg9Zk8pA"
		const stringGzKH9s2 = "Q8viF7uJc2AEk4vGybFofqQHOW4mcoA6eKtDp"
		const 
a9hdjE = await BirdOraclelABYTmB.updatedChainRequest.call(uintugXKNuS, uintE4iiPs4, {from: accounts[1]});
		const uintfPWnsJ9 = await BirdOraclelABYTmB.getRatingByAddress.call(addressIW8vFFb, {from: accounts[0]});
		const uintKiKTHz1 = await BirdOraclelABYTmB.getRatingByAddressString.call(stringupVWKOm, {from: accounts[5]});
		const stringbZkcT3O = await BirdOraclelABYTmB.extractAddress.call(stringqknVGxI, {from: accounts[5]});
		const 
okoKNVU = await BirdOraclelABYTmB.newChainRequest.call(stringGzKH9s2, stringEQKHDaG, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelABYTmB = await BirdOracle.new({from: accounts[3]});
		const uintENJIpWP = BigInt("1105")
		const stringFpFZxdH = "EInmsdhfp9zdtu1JwxAvzx9SRe9TlQwWmk04874RQlNSbV5N3dFb4IX8wyyXIJq8QCGuI5lCvTnVhvoaZ6"
		const uintdmCGrxO = BigInt("687")
		const uintdueRuax = BigInt("1915")
		const addressq16ZMn7 = accounts[3]
		const stringupVWKOm = "meFyUWodUQa"
		const uint8xQojz = BigInt("1167")
		const uintF5kJDGu = BigInt("38")
		const uintVsmaJjp = BigInt("773")
		const uintLNlF7s = BigInt("661")
		const stringlDlQYga = "BSMvjBVnRFHnRqEU7aNCbYkZ5LynNUelRT7MBuLWDjIXlsWCStm2npjD6zYPjkHoC2SfUAkDfd9AKVhjuNgUvDcPLXRhCpScR"
		const stringqknVGxI = "fCQcLN7nxXuCQSz6vGA4rG4ipvJEkdTbseIBNUgFI4ak6Npa9l2WkSmXmIfXJ9ffdwbFTpjh881NzThtDoGdmzdc2X18"
		const stringEQKHDaG = "YNQRa6ryjwxPhQjJI1OSwMdF4Kg9Zk8pA"
		const stringGzKH9s2 = "Q8viF7uJc2AEk4vGybFofqQHOW4mcoA6eKtDp"
		const stringgalWqx = await BirdOraclelABYTmB.substring.call(stringFpFZxdH, uintENJIpWP, {from: accounts[2]});
		const 
a9hdjE = await BirdOraclelABYTmB.updatedChainRequest.call(uintdueRuax, uintdmCGrxO, {from: accounts[1]});
		const uintfPWnsJ9 = await BirdOraclelABYTmB.getRatingByAddress.call(addressq16ZMn7, {from: accounts[0]});
		const uintKiKTHz1 = await BirdOraclelABYTmB.getRatingByAddressString.call(stringupVWKOm, {from: accounts[5]});
		const 
vuP0Tx1 = await BirdOraclelABYTmB.updatedChainRequest.call(uintF5kJDGu, uint8xQojz, {from: "0x0000000000000000000000000000000000000001"});
		const stringiXe5rnq = await BirdOraclelABYTmB.substring.call(stringlDlQYga, uintLNlF7s, uintVsmaJjp, {from: accounts[0]});
		const stringbZkcT3O = await BirdOraclelABYTmB.extractAddress.call(stringqknVGxI, {from: accounts[5]});
		const 
okoKNVU = await BirdOraclelABYTmB.newChainRequest.call(stringGzKH9s2, stringEQKHDaG, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKv2kxGi = await BirdOracle.new({from: accounts[2]});
		const uinthlEIw5C = BigInt("262")
		const stringitxIT9W = "K7XbATIo"
		const addressy1dEOrA = accounts[1]
		const stringRFbBtBw = "jatdePz0KhlhT5rgKdGU3FkAh7WJ5e6RWIyc7JiGh5XGPcEPzj11px5YHGXnWRR38J2XTbL5Pz"
		const uintE80Yrel = BigInt("73")
		const uintVS6rvrK = BigInt("543")
		const stringoxqxGkW = "Jdu1gq7VCKaGo5rm9if9kWwJc7MyCbr5q3qAWwRtjtgifUbMPiOCRJpZyKJd86"
		const uintw74GnMf = BigInt("2025")
		const stringhkl8H2 = "UnblvKNJ9xHyCeYxPVjUsWhJHUXhES6KBjg2Cuy8psklihKxytGS40wBsjjOnVS75wYYiGz3Hcp2kYF1PCoGT"
		const stringBViAMM7 = await BirdOracleKv2kxGi.substring.call(stringitxIT9W, uinthlEIw5C, {from: accounts[0]});
		const uintloKkfqL = await BirdOracleKv2kxGi.getRatingByAddress.call(addressy1dEOrA, {from: accounts[5]});
		const stringM5REswT = await BirdOracleKv2kxGi.extractAddress.call(stringRFbBtBw, {from: accounts[4]});
		const stringc8tVZNu = await BirdOracleKv2kxGi.substring.call(stringoxqxGkW, uintVS6rvrK, uintE80Yrel, {from: accounts[3]});
		const stringnCSq1rW = await BirdOracleKv2kxGi.substring.call(stringhkl8H2, uintw74GnMf, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehLenIR2 = await BirdOracle.new({from: accounts[3]});
		const addresspCCpon2 = accounts[3]
		const uintW7Mfkw5 = await BirdOraclehLenIR2.getRatingByAddress.call(addresspCCpon2, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA9qk9jm = await BirdOracle.new({from: accounts[0]});
		const uintoyl44me = BigInt("1804")
		const stringMuzv4jK = "bMnDqBIBObCKbJf4V7Dy2GSi1XBF2YXE3dVDDQbLuzN2Gjxd7JQmerbXt7pC4GDLPVDL"
		const uintKkA2Bj = BigInt("1402")
		const uintvnBGSt5 = BigInt("1041")
		const stringMOQuspt = "8G"
		const uintzRnKOEZ = BigInt("533")
		const uint1uMdIf = BigInt("507")
		const stringLjc9WCT = "yjrAA58kJ9eIC8rQciOaYpPPAS3SIMSjthRAXB15Q8Nohq1chf8eMgvCuv9vCDRVzaDvIyTbPGqng6"
		const uintOTdhmWc = BigInt("17")
		const uintX60icnI = BigInt("1039")
		const stringpvVJOKS = "anq4kCMNu5kb0JisVin5InMZbUJ8C1LP6xrSFpjNnRomBuRX4CRjfB9Ooj3wThlRA3"
		const stringYoTjRz = "asjmfbDeCUamWQHz59QrpJlnJrq4NoQ4UW7dXGu1pc9O3lA5MRH0ebi6S2aD7WRRnYsN2dtPN4WreNpR"
		const stringuaTTl5Z = "J0kXXvlCgx6"
		const stringGoHw2TT = "NIY9PftwetB1E6EhohJ"
		const stringX0DtdLO = "eG2Czdr8feh8IaKvVhhL4C7d1iD6CPmazmSfIhLDT95kcx27PvJpC34z"
		const stringZewppPz = await BirdOracleA9qk9jm.substring.call(stringMuzv4jK, uintoyl44me, {from: accounts[5]});
		const stringqRQ27z = await BirdOracleA9qk9jm.substring.call(stringMOQuspt, uintvnBGSt5, uintKkA2Bj, {from: accounts[1]});
		const stringOuVTfO = await BirdOracleA9qk9jm.substring.call(stringLjc9WCT, uint1uMdIf, uintzRnKOEZ, {from: accounts[4]});
		const string84S618 = await BirdOracleA9qk9jm.substring.call(stringpvVJOKS, uintX60icnI, uintOTdhmWc, {from: accounts[0]});
		const uinti3z2960 = await BirdOracleA9qk9jm.getRating.call({from: accounts[4]});
		const uintNo9o1Vb = await BirdOracleA9qk9jm.getRatingByAddressString.call(stringYoTjRz, {from: accounts[1]});
		const addressE6EYOBt = await BirdOracleA9qk9jm.parseAddr.call(stringuaTTl5Z, {from: "0x0000000000000000000000000000000000000001"});
		const 
waSDhSR = await BirdOracleA9qk9jm.newChainRequest.call(stringX0DtdLO, stringGoHw2TT, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleSxgukRu = await BirdOracle.new({from: accounts[4]});
		const uintEScFHlg = BigInt("1518")
		const stringHKTkXLQ = "yHn7oCCjgBk43Ihl4Kn8v8odF9EiYlMdKylDOO7fCc3zwur0nRiRu32BYkn8qOWCc9F39t4XR4P12vu5CB9"
		const uintmN7OCy = BigInt("1334")
		const uintKzkZvzt = BigInt("1971")
		const stringqRrz57 = "dgTpd0unIiRHI3BWwi1NAhT8BS"
		const uintTkGccN = BigInt("541")
		const uintDyuBlvO = BigInt("44")
		const stringR4w1M3c = "kWVu3u9B6BZhiFZ7FuTuUvJFEFjnnGcta2notu8Y9EzHCR0rmTv520mpCYgKbuP"
		const stringGUpQmfY = await BirdOracleSxgukRu.substring.call(stringHKTkXLQ, uintEScFHlg, {from: accounts[4]});
		const stringbLCz7Kx = await BirdOracleSxgukRu.substring.call(stringqRrz57, uintKzkZvzt, uintmN7OCy, {from: accounts[2]});
		const stringjLeWcmD = await BirdOracleSxgukRu.substring.call(stringR4w1M3c, uintDyuBlvO, uintTkGccN, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleTRe6gmb = await BirdOracle.new({from: accounts[0]});
		const uintBcQ3eOI = BigInt("1869")
		const stringmvEDVk = "Lbxu6y2vbKWVuqP"
		const stringOiUvdki = "tbptPQStceW8ICTxbTK81euxJzrdkOxKVbd8J3oC5yF0fQxPPG5bYt0uWXaEOYNfRS71NfqSUj5g0I"
		const stringgBNAVX2 = "SQXWYkV59T5VnEYOM6qmoVslxhzhQ7k7FDRwN7wVaQe7LAaZvvuDgMEw1dHW3spKrAIKyAN4E0idg2"
		const uintWVka4iL = await BirdOracleTRe6gmb.getRating.call({from: accounts[3]});
		const stringN4FZfUa = await BirdOracleTRe6gmb.substring.call(stringmvEDVk, uintBcQ3eOI, {from: "0x0000000000000000000000000000000000000001"});
		const 
Ms4mIYf = await BirdOracleTRe6gmb.newChainRequest.call(stringgBNAVX2, stringOiUvdki, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclevwWvwla = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwDNDx9g = BigInt("1373")
		const uintCWR9ImB = BigInt("360")
		const stringYrjaOUI = "752kXZ5i8bjfqGXPezHig6VoF4U1LwKcgaeMSCAYfFSBhPSNTPnez4Frxu1OsbEiPXXZmT31uCwy0ikFWVoeTIfm8YKOe"
		const addressy4JQSj = accounts[1]
		const stringZ1bvjoF = "OoObOj8Dw6C4hQeEP8yYIhrvvdJGu3l1sY6BxeGVRfy7uvgppRLfCD39WAP5V1fgwQq7ElfM88DiwUno6K1bpCHHp3"
		const stringKUgbtmK = "KZcnHs2XB63paQITGLcH8fisXPnOL0Hl7TAsfYnSK2HNfDny"
		const uintiXtouWN = BigInt("1672")
		const stringp02Fov5 = "lIpXJtT9LbYuXTgK2JFcaj4Jr414"
		const uint4sLjLX = BigInt("794")
		const stringi6bXF5E = "znfYqVTwwlql3tsoiUipqGqy9uUdwSlL8HWEkzkkVLpKFsnt3r5u"
		const stringzaq3WTG = await BirdOraclevwWvwla.substring.call(stringYrjaOUI, uintCWR9ImB, uintwDNDx9g, {from: "0x0000000000000000000000000000000000000001"});
		const uintM9WW7Sx = await BirdOraclevwWvwla.getRatingByAddress.call(addressy4JQSj, {from: accounts[2]});
		const uintHrOOsDo = await BirdOraclevwWvwla.getRatingByAddressString.call(stringZ1bvjoF, {from: accounts[2]});
		const uintyK6M4Y = await BirdOraclevwWvwla.getRatingByAddressString.call(stringKUgbtmK, {from: accounts[1]});
		const string2hGtIC = await BirdOraclevwWvwla.substring.call(stringp02Fov5, uintiXtouWN, {from: accounts[0]});
		const stringFIhQiUZ = await BirdOraclevwWvwla.substring.call(stringi6bXF5E, uint4sLjLX, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehLenIR2 = await BirdOracle.new({from: accounts[3]});
		const uintndsdUG = BigInt("135")
		const uintr1fIZ1y = BigInt("135")
		const stringTN91rXO = "1YYMD21lA9BUQf8MW3BkkAQIZNrteuICCCFv21wCJj4EQbpe"
		const uintP0i3zzZ = BigInt("890")
		const stringLm4YIun = "6usToRNy0GABqO5zgq2C3bGbErSjSlqToj2n7KUmP25fQfdVsHFEDYao3agIs55BqpMmfgyj48SO8xF"
		const stringft1ATje = await BirdOraclehLenIR2.substring.call(stringTN91rXO, uintr1fIZ1y, uintndsdUG, {from: accounts[1]});
		const stringYfVvt01 = await BirdOraclehLenIR2.substring.call(stringLm4YIun, uintP0i3zzZ, {from: accounts[1]});
	});
})