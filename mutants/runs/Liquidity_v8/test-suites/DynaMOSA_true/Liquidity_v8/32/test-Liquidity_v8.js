const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringjDzsa8M = "TIezjxMVHaILPP16M1nuhe3ii8a4OYmz8OCWv5kYyXTmVNje7Vnl8t1m44Bg3y"
		const addressG0hquVH = accounts[1]
		const addressh3uYXfi = accounts[4]
		const uintAOlhJA = BigInt("1412")
		const uintb63tMjl = BigInt("1942")
		const Liquidity_v8kgi8iaa = await Liquidity_v8.new(stringjDzsa8M, addressG0hquVH, addressh3uYXfi, uintAOlhJA, uintb63tMjl, {from: accounts[5]});
		const addressjirSGE7 = accounts[1]
		const addressQDpq2dC = accounts[4]
		const addressDt1r39C = accounts[5]
		const addressHa5mtdJ = await Liquidity_v8kgi8iaa.transferOwnership.call(addressjirSGE7, {from: accounts[2]});
		const uint256G19ZCG3 = await Liquidity_v8kgi8iaa.calculate.call(addressQDpq2dC, {from: accounts[3]});
		const 
VrEzWn2 = await Liquidity_v8kgi8iaa.userDeposits.call(addressDt1r39C, {from: accounts[2]});
		const boolmyIX3vI = await Liquidity_v8kgi8iaa.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const string2MYHzT = "B5lykEOxhm41tozmLdi8mNcPtSqKJspXSFJoke7Invdpg4ergGIG0vZg2vEB13MuDWaD7TE8td3bFLLSrRruHfcg"
		const addressLUb2bUV = accounts[2]
		const addresseWcCUDp = accounts[2]
		const uintKM0HVrj = BigInt("1854")
		const uintCZEQAAn = BigInt("835")
		const Liquidity_v8hMmeHcz = await Liquidity_v8.new(string2MYHzT, addressLUb2bUV, addresseWcCUDp, uintKM0HVrj, uintCZEQAAn, {from: accounts[1]});
		const addressZdJd2uR = accounts[4]
		const uintxblOdBU = BigInt("594")
		const addresssm0bL7 = accounts[2]
		const uintGHrNDfb = BigInt("599")
		const uintArofCHw = BigInt("1966")
		const 
RwlGRJV = await Liquidity_v8hMmeHcz._hasAllowance.call(addresssm0bL7, uintxblOdBU, addressZdJd2uR, {from: accounts[1]});
		const uint256sI8rhSa = await Liquidity_v8hMmeHcz.changeLockDuration.call(uintGHrNDfb, {from: accounts[3]});
		const uint256PsGl8MG = await Liquidity_v8hMmeHcz.changeLockDuration.call(uintArofCHw, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTbyJn2D = "kb8lS0NAd8R7HrBt2rLCsqmOUaWGI8Xo6wkHAYheSlDLVajc92lLzps5wa4YPQPU9HXQMIxwsB"
		const addressV73hbSH = "0x0000000000000000000000000000000000000001"
		const addresshcOtha0 = "0x0000000000000000000000000000000000000001"
		const uintsQgXZsq = BigInt("942")
		const uinthn7AT3u = BigInt("1315")
		const Liquidity_v8380U3E = await Liquidity_v8.new(stringTbyJn2D, addressV73hbSH, addresshcOtha0, uintsQgXZsq, uinthn7AT3u, {from: accounts[3]});
		const addressvcZzv8A = accounts[1]
		const uintzJHjfdZ = BigInt("1069")
		const addresssYPQdMX = accounts[1]
		const boolhhHFiAY = await Liquidity_v8380U3E.withdraw.call({from: accounts[1]});
		await Liquidity_v8380U3E.onlyOwner.call({from: accounts[0]});
		const 
Ezwydk2 = await Liquidity_v8380U3E._hasAllowance.call(addresssYPQdMX, uintzJHjfdZ, addressvcZzv8A, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringSItGaXx = "3pTnPAnFWNlddOeSru4kH58zckWdy1DdycSr"
		const addressxfOcJSY = "0x0000000000000000000000000000000000000001"
		const addresswDEFrgu = "0x0000000000000000000000000000000000000001"
		const uintaz58DjR = BigInt("1671")
		const uinttkcx7vt = BigInt("1178")
		const Liquidity_v8ixSg8oU = await Liquidity_v8.new(stringSItGaXx, addressxfOcJSY, addresswDEFrgu, uintaz58DjR, uinttkcx7vt, {from: accounts[3]});
		const uintgn1p3IF = BigInt("36")
		const uint64YsoUXiE = await Liquidity_v8ixSg8oU.setRate.call(uintgn1p3IF, {from: accounts[3]});
		const addressYkuc9jP = await Liquidity_v8ixSg8oU.owner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringSuaUTes = "2IIgggxVXYUgFxG3Bbt540xkUa"
		const addressa0DT5xG = accounts[0]
		const addressUfoIzNv = accounts[1]
		const uintEUFTnhZ = BigInt("1237")
		const uintwwCy09O = BigInt("1203")
		const Liquidity_v8pEcUf8E = await Liquidity_v8.new(stringSuaUTes, addressa0DT5xG, addressUfoIzNv, uintEUFTnhZ, uintwwCy09O, {from: accounts[2]});
		const addressNGeXefk = accounts[3]
		const addressthaeAtZ = accounts[2]
		const addressL9GbUhf = accounts[1]
		const uintgksQmTg = BigInt("134")
		const uint256gk1bkNw = await Liquidity_v8pEcUf8E.calculate.call(addressNGeXefk, {from: accounts[2]});
		const addresse89ohW = await Liquidity_v8pEcUf8E.transferOwnership.call(addressthaeAtZ, {from: accounts[3]});
		const addressJ6QcuMc = await Liquidity_v8pEcUf8E.transferOwnership.call(addressL9GbUhf, {from: accounts[0]});
		const uint64SiazTnC = await Liquidity_v8pEcUf8E.setRate.call(uintgksQmTg, {from: accounts[4]});
		await Liquidity_v8pEcUf8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringi4gqV2A = "6g3lT"
		const addressQtxnoyv = accounts[1]
		const addressPAtPYzF = "0x0000000000000000000000000000000000000001"
		const uintbogu8fg = BigInt("1304")
		const uintTSpdbFG = BigInt("1544")
		const Liquidity_v8tq9yn69 = await Liquidity_v8.new(stringi4gqV2A, addressQtxnoyv, addressPAtPYzF, uintbogu8fg, uintTSpdbFG, {from: accounts[3]});
		const addressDp5sRL = accounts[3]
		const addressUZAmAd = accounts[2]
		const 
tH28mGy = await Liquidity_v8tq9yn69.userDeposits.call(addressDp5sRL, {from: accounts[3]});
		await Liquidity_v8tq9yn69.onlyOwner.call({from: accounts[4]});
		const boolNkZczI2 = await Liquidity_v8tq9yn69.isOwner.call({from: accounts[0]});
		const uint2566zGCoF = await Liquidity_v8tq9yn69.calculate.call(addressUZAmAd, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIV12aFM = "cpC6qplOeuvBDMjDVx0uGjemNaKkLggPWjWqOML4pjH2NlncMlI1nhRjvvIpaz1UszXMCJD"
		const addressfaX2RVA = accounts[1]
		const addressGKlK31d = accounts[0]
		const uintl8rbRhD = BigInt("2008")
		const uintIUqbmAv = BigInt("643")
		const Liquidity_v8wIHxWwj = await Liquidity_v8.new(stringIV12aFM, addressfaX2RVA, addressGKlK31d, uintl8rbRhD, uintIUqbmAv, {from: accounts[0]});
		const uints6cz6GC = BigInt("479")
		const uintI4ZNhzE = BigInt("676")
		await Liquidity_v8wIHxWwj.renounceOwnership.call({from: accounts[0]});
		const uint256chA8VS2 = await Liquidity_v8wIHxWwj.changeLockDuration.call(uints6cz6GC, {from: accounts[1]});
		const boolJicfr8O = await Liquidity_v8wIHxWwj.stake.call(uintI4ZNhzE, {from: accounts[4]});
		await Liquidity_v8wIHxWwj.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const string8N01qx = "szTfzEqTBv0YuiwfDeHdDpNPvvN3A34Q"
		const addressnqKMs8X = accounts[2]
		const addresskuq5t7a = accounts[3]
		const uintq01vt4f = BigInt("1934")
		const uintUVgcbir = BigInt("161")
		const Liquidity_v8zyJ6xsV = await Liquidity_v8.new(string8N01qx, addressnqKMs8X, addresskuq5t7a, uintq01vt4f, uintUVgcbir, {from: accounts[3]});
		const addressRC0ddr = accounts[4]
		const uintyKxWgvM = BigInt("1696")
		const uintpiTBloL = BigInt("1839")
		const uintinMWAw = BigInt("1095")
		const 
U9gHAqH = await Liquidity_v8zyJ6xsV.userDeposits.call(addressRC0ddr, {from: accounts[4]});
		const boolkQ9wbw = await Liquidity_v8zyJ6xsV.stake.call(uintyKxWgvM, {from: accounts[0]});
		const boolijWx6n6 = await Liquidity_v8zyJ6xsV.stake.call(uintpiTBloL, {from: "0x0000000000000000000000000000000000000001"});
		const boolFWh6q3n = await Liquidity_v8zyJ6xsV.isOwner.call({from: accounts[3]});
		const boolC9INI1G = await Liquidity_v8zyJ6xsV.emergencyWithdraw.call({from: accounts[4]});
		const uint256pP0fBJe = await Liquidity_v8zyJ6xsV.changeLockDuration.call(uintinMWAw, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWQYARJF = "XQc7qqJMPtIYhSNMKtD8"
		const addressGnzOGwL = "0x0000000000000000000000000000000000000001"
		const addressq5cLNrq = accounts[4]
		const uintdKN5UTF = BigInt("1928")
		const uintKRvCLQM = BigInt("1694")
		const Liquidity_v8S9AAufd = await Liquidity_v8.new(stringWQYARJF, addressGnzOGwL, addressq5cLNrq, uintdKN5UTF, uintKRvCLQM, {from: accounts[2]});
		const uintHADBB5P = BigInt("299")
		const uinthemsb5 = BigInt("1014")
		const addressyMU5D5J = await Liquidity_v8S9AAufd.owner.call({from: accounts[0]});
		const boolEORXBOx = await Liquidity_v8S9AAufd.emergencyWithdraw.call({from: accounts[3]});
		const boolaxAAWF4 = await Liquidity_v8S9AAufd.addReward.call(uintHADBB5P, {from: accounts[3]});
		const uint256oc93XQ = await Liquidity_v8S9AAufd.changeLockDuration.call(uinthemsb5, {from: accounts[2]});
		const booluFIEhuH = await Liquidity_v8S9AAufd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringMBREtzV = "dteU5cOjV"
		const addressKqSfjlZ = accounts[1]
		const addressq1IAit4 = accounts[0]
		const uintILbn5N3 = BigInt("267")
		const uintZpFnPwp = BigInt("1818")
		const Liquidity_v8oaKdqR5 = await Liquidity_v8.new(stringMBREtzV, addressKqSfjlZ, addressq1IAit4, uintILbn5N3, uintZpFnPwp, {from: "0x0000000000000000000000000000000000000001"});
		const uintpm6Puxv = BigInt("1937")
		const uintRvE29MH = BigInt("386")
		const addressJRQGfC = accounts[4]
		const boolPK36oj = await Liquidity_v8oaKdqR5.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint64At9SD8P = await Liquidity_v8oaKdqR5.setRate.call(uintpm6Puxv, {from: accounts[5]});
		const uint256f0Z11Jb = await Liquidity_v8oaKdqR5.changeLockDuration.call(uintRvE29MH, {from: accounts[0]});
		const uint256ybc1QQa = await Liquidity_v8oaKdqR5.calculate.call(addressJRQGfC, {from: accounts[1]});
		await Liquidity_v8oaKdqR5.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWQYARJF = "XQc7qqJMPtIYhSNMKtD8"
		const addressmFIUFIc = "0x0000000000000000000000000000000000000001"
		const addressPwxfvMY = accounts[4]
		const uintrOtBEJX = BigInt("1928")
		const uintpMf2hdG = BigInt("1694")
		const Liquidity_v8S9AAufd = await Liquidity_v8.new(stringWQYARJF, addressmFIUFIc, addressPwxfvMY, uintrOtBEJX, uintpMf2hdG, {from: accounts[2]});
		const addressTAuAST5 = accounts[2]
		const uintDp2Wi6v = BigInt("1033")
		const addressyHRsV6w = "0x0000000000000000000000000000000000000001"
		const addressFKGHtec = accounts[3]
		const uint256ok3J7rf = await Liquidity_v8S9AAufd.calculate.call(addressTAuAST5, {from: accounts[3]});
		const addressyMU5D5J = await Liquidity_v8S9AAufd.owner.call({from: accounts[0]});
		const uint256oc93XQ = await Liquidity_v8S9AAufd.changeLockDuration.call(uintDp2Wi6v, {from: accounts[2]});
		const uint256gqoFwl = await Liquidity_v8S9AAufd.calculate.call(addressyHRsV6w, {from: accounts[1]});
		await Liquidity_v8S9AAufd.renounceOwnership.call({from: accounts[3]});
		const addressnIVc9Rh = await Liquidity_v8S9AAufd.transferOwnership.call(addressFKGHtec, {from: accounts[3]});
		await Liquidity_v8S9AAufd.renounceOwnership.call({from: accounts[3]});
		await Liquidity_v8S9AAufd.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVVBlZGv = "IRygXjgGsHfhTooEI2RUIYdacU"
		const addressG5Yb7UK = accounts[3]
		const addressCI78SHR = "0x0000000000000000000000000000000000000001"
		const uintU8OHGNs = BigInt("1851")
		const uintetwYhYB = BigInt("1902")
		const Liquidity_v8gU2s9KF = await Liquidity_v8.new(stringVVBlZGv, addressG5Yb7UK, addressCI78SHR, uintU8OHGNs, uintetwYhYB, {from: accounts[3]});
		const addresscwAGOn1 = "0x0000000000000000000000000000000000000001"
		const uintlMJh5V9 = BigInt("1474")
		const addressQnTBWEE = accounts[2]
		const uintkPWN21G = BigInt("1316")
		const addressM7Jq328 = await Liquidity_v8gU2s9KF.transferOwnership.call(addresscwAGOn1, {from: accounts[3]});
		const boolg4DSzK = await Liquidity_v8gU2s9KF.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint64s9S7VqT = await Liquidity_v8gU2s9KF.setRate.call(uintlMJh5V9, {from: accounts[4]});
		const uint256S1e9wjs = await Liquidity_v8gU2s9KF.calculate.call(addressQnTBWEE, {from: "0x0000000000000000000000000000000000000001"});
		const booloANIz4L = await Liquidity_v8gU2s9KF.stake.call(uintkPWN21G, {from: accounts[2]});
	});
})