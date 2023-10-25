const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringF5TkGe4 = "6"
		const addressfgFBCZE = accounts[0]
		const addresskfJTFxv = accounts[3]
		const uintYuIjkS = BigInt("409")
		const uinte8Nq25 = BigInt("840")
		const Liquidity_v8se5GtXk = await Liquidity_v8.new(stringF5TkGe4, addressfgFBCZE, addresskfJTFxv, uintYuIjkS, uinte8Nq25, {from: accounts[4]});
		const uintZaE9YWK = BigInt("1160")
		const addressALZpEPt = "0x0000000000000000000000000000000000000001"
		const uintFIqD8AX = BigInt("343")
		await Liquidity_v8se5GtXk.onlyOwner.call({from: accounts[3]});
		const boolrNgbDdy = await Liquidity_v8se5GtXk.stake.call(uintZaE9YWK, {from: accounts[0]});
		const 
Mc8tq2s = await Liquidity_v8se5GtXk.userDeposits.call(addressALZpEPt, {from: accounts[1]});
		const boollaISPV9 = await Liquidity_v8se5GtXk.isOwner.call({from: accounts[1]});
		const boolizW7BW = await Liquidity_v8se5GtXk.stake.call(uintFIqD8AX, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringlmUcwiI = "Qr8QWaNXST"
		const addressdp6ccuA = accounts[1]
		const addresswfAG7ol = accounts[0]
		const uintxxXGbRI = BigInt("1509")
		const uintAa0Qf3S = BigInt("1616")
		const Liquidity_v8IN8XoNj = await Liquidity_v8.new(stringlmUcwiI, addressdp6ccuA, addresswfAG7ol, uintxxXGbRI, uintAa0Qf3S, {from: accounts[5]});
		const uintMzOOcke = BigInt("1655")
		const uint64UwPhCqV = await Liquidity_v8IN8XoNj.setRate.call(uintMzOOcke, {from: accounts[4]});
		const boolenV0Gki = await Liquidity_v8IN8XoNj.emergencyWithdraw.call({from: accounts[0]});
		await Liquidity_v8IN8XoNj.renounceOwnership.call({from: accounts[0]});
		await Liquidity_v8IN8XoNj.onlyOwner.call({from: accounts[3]});
		const boolSn1Xh6 = await Liquidity_v8IN8XoNj.isOwner.call({from: accounts[0]});
		const boolmpQFMU = await Liquidity_v8IN8XoNj.isOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringp4wV541 = "eIroevSdYOHN8IkkBpyRpWdcCjdtzYhn2Z4WY4"
		const addresshjjTVnv = accounts[2]
		const addressV1Z6SNd = accounts[0]
		const uintmVcHX4c = BigInt("1815")
		const uintavougDC = BigInt("1402")
		const Liquidity_v8z0tkm7Q = await Liquidity_v8.new(stringp4wV541, addresshjjTVnv, addressV1Z6SNd, uintmVcHX4c, uintavougDC, {from: accounts[2]});
		const uintkdPBhm = BigInt("1228")
		const boolWp24KqN = await Liquidity_v8z0tkm7Q.addReward.call(uintkdPBhm, {from: accounts[0]});
		const boolNxg3CCl = await Liquidity_v8z0tkm7Q.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTI5T5P = "7bAPjEwnk8mt2GXT9cqVEY1NfoWQvL8IYFNXdb3C8pXGTJppAVI2P2ooyniXqCYVwCDL9ODMDt"
		const addressUsMHK0O = accounts[4]
		const addressGd0qHk8 = accounts[5]
		const uintb3t40K = BigInt("1359")
		const uintWWTJZTY = BigInt("56")
		const Liquidity_v8ApqiqGj = await Liquidity_v8.new(stringTI5T5P, addressUsMHK0O, addressGd0qHk8, uintb3t40K, uintWWTJZTY, {from: "0x0000000000000000000000000000000000000001"});
		const uintuTUM3yX = BigInt("1096")
		const uintn0IIGiw = BigInt("401")
		const addressYg3Ovgl = "0x0000000000000000000000000000000000000001"
		const uintP2E9nn5 = BigInt("174")
		const addressvcCpMiB = accounts[2]
		const uintqyi0hJ7 = BigInt("1492")
		const uint64SRoaG5o = await Liquidity_v8ApqiqGj.setRate.call(uintuTUM3yX, {from: "0x0000000000000000000000000000000000000001"});
		const boolSnuXybG = await Liquidity_v8ApqiqGj.addReward.call(uintn0IIGiw, {from: accounts[2]});
		const addressw6a6wdh = await Liquidity_v8ApqiqGj.owner.call({from: accounts[1]});
		const 
BNr3Y2Y = await Liquidity_v8ApqiqGj._hasAllowance.call(addressvcCpMiB, uintP2E9nn5, addressYg3Ovgl, {from: accounts[4]});
		const boolGe2h3D = await Liquidity_v8ApqiqGj.stake.call(uintqyi0hJ7, {from: accounts[4]});
		const booleorKxCH = await Liquidity_v8ApqiqGj.isOwner.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCjMGaYZ = "5zi0Mumrjefh9v1xbLnSnwUHJe"
		const addressKcuI1pI = accounts[1]
		const addressePej9ah = accounts[1]
		const uintghB4l9A = BigInt("2038")
		const uintn3epHM = BigInt("263")
		const Liquidity_v8OdBTO7z = await Liquidity_v8.new(stringCjMGaYZ, addressKcuI1pI, addressePej9ah, uintghB4l9A, uintn3epHM, {from: accounts[3]});
		const addressg4MVHOk = accounts[3]
		const uintikw8xd = BigInt("1070")
		const addressa08FXWh = accounts[3]
		const 
UYxEir = await Liquidity_v8OdBTO7z.userDeposits.call(addressg4MVHOk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zXlokck = await Liquidity_v8OdBTO7z.changeLockDuration.call(uintikw8xd, {from: accounts[5]});
		const boolGDtlFIg = await Liquidity_v8OdBTO7z.emergencyWithdraw.call({from: accounts[2]});
		const 
vDm5QhH = await Liquidity_v8OdBTO7z.userDeposits.call(addressa08FXWh, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringp4wV541 = "eIroevSdYOHN8IkkBpyRpWdcCjdtzYhn2Z4WY4"
		const addressRmhfLqh = accounts[2]
		const addressxHoTmU3 = accounts[0]
		const uintcgeSGWr = BigInt("1815")
		const uintuaOG6Qe = BigInt("1402")
		const Liquidity_v8z0tkm7Q = await Liquidity_v8.new(stringp4wV541, addressRmhfLqh, addressxHoTmU3, uintcgeSGWr, uintuaOG6Qe, {from: accounts[2]});
		const uintAxhwJOA = BigInt("1228")
		const boolSG3MB2M = await Liquidity_v8z0tkm7Q.emergencyWithdraw.call({from: accounts[4]});
		const boolx899GsP = await Liquidity_v8z0tkm7Q.isOwner.call({from: accounts[5]});
		const boolWp24KqN = await Liquidity_v8z0tkm7Q.addReward.call(uintAxhwJOA, {from: accounts[0]});
		const boolNxg3CCl = await Liquidity_v8z0tkm7Q.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCjMGaYZ = "5zi0Mumrjefh9v1xbLnSnwUHJe"
		const addressD5Rb7pr = accounts[1]
		const addressXwXq4pk = accounts[1]
		const uintaTfL41G = BigInt("2038")
		const uintMflgBvi = BigInt("263")
		const Liquidity_v8OdBTO7z = await Liquidity_v8.new(stringCjMGaYZ, addressD5Rb7pr, addressXwXq4pk, uintaTfL41G, uintMflgBvi, {from: accounts[3]});
		const addressJ1zjn1G = accounts[3]
		const uintQBd0HQY = BigInt("1049")
		const uint2GBM6w = BigInt("1925")
		const addressoh609DY = accounts[4]
		const 
UYxEir = await Liquidity_v8OdBTO7z.userDeposits.call(addressJ1zjn1G, {from: "0x0000000000000000000000000000000000000001"});
		const boolAHE5vmQ = await Liquidity_v8OdBTO7z.withdraw.call({from: accounts[2]});
		const uint256zXlokck = await Liquidity_v8OdBTO7z.changeLockDuration.call(uintQBd0HQY, {from: accounts[5]});
		const uint256FGqaHqy = await Liquidity_v8OdBTO7z.changeLockDuration.call(uint2GBM6w, {from: accounts[1]});
		const 
vDm5QhH = await Liquidity_v8OdBTO7z.userDeposits.call(addressoh609DY, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringp4wV541 = "eIroevSdYOHN8IkkBpyRpWdcCjdtzYhn2Z4WY4"
		const addressJ64PYkD = accounts[2]
		const addressVi5FdwE = accounts[0]
		const uintoqysWMA = BigInt("1815")
		const uint1zAyvs = BigInt("1402")
		const Liquidity_v8z0tkm7Q = await Liquidity_v8.new(stringp4wV541, addressJ64PYkD, addressVi5FdwE, uintoqysWMA, uint1zAyvs, {from: accounts[2]});
		const addressY37venG = accounts[4]
		const boolNxg3CCl = await Liquidity_v8z0tkm7Q.isOwner.call({from: accounts[3]});
		const 
wlA2qm9 = await Liquidity_v8z0tkm7Q.userDeposits.call(addressY37venG, {from: accounts[4]});
		await Liquidity_v8z0tkm7Q.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyE5eBtr = "To2zjJdvPhbuZxf8v149Y3sfqyTY0FO1ARNiYVkZ5eDvqA283IMrw4T3l"
		const addressV0YvCie = accounts[1]
		const addressju9voT5 = accounts[0]
		const uintlstpjvR = BigInt("557")
		const uinta9bjNHt = BigInt("794")
		const Liquidity_v8Vzj10xB = await Liquidity_v8.new(stringyE5eBtr, addressV0YvCie, addressju9voT5, uintlstpjvR, uinta9bjNHt, {from: accounts[1]});
		const addressquP7h65 = accounts[3]
		const addressmEAORX = accounts[1]
		const addressMMULHvp = accounts[3]
		const addresshNdtpor = accounts[4]
		const uint256SHsTQ76 = await Liquidity_v8Vzj10xB.calculate.call(addressquP7h65, {from: accounts[0]});
		const uint256iD0Jjhx = await Liquidity_v8Vzj10xB.calculate.call(addressmEAORX, {from: accounts[0]});
		const addressiAloL8 = await Liquidity_v8Vzj10xB.transferOwnership.call(addressMMULHvp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LJWVFW3 = await Liquidity_v8Vzj10xB.calculate.call(addresshNdtpor, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyE5eBtr = "To2zjJdvPhbuZxf8v149Y3sfqyTY0FO1ARNiYVkZ5eDvqA283IMrw4T3l"
		const addressKTcMlHF = accounts[1]
		const addressviqx54u = accounts[0]
		const uintML0bLJb = BigInt("557")
		const uint7ka81u = BigInt("794")
		const Liquidity_v8Vzj10xB = await Liquidity_v8.new(stringyE5eBtr, addressKTcMlHF, addressviqx54u, uintML0bLJb, uint7ka81u, {from: accounts[1]});
		const addressViMaaTG = accounts[3]
		const addressy3Fbn1g = accounts[1]
		const uintlyBmLli = BigInt("835")
		const addressyyfUvLq = accounts[3]
		const addressdFhlVOd = accounts[4]
		const uint256SHsTQ76 = await Liquidity_v8Vzj10xB.calculate.call(addressViMaaTG, {from: accounts[0]});
		const uint256iD0Jjhx = await Liquidity_v8Vzj10xB.calculate.call(addressy3Fbn1g, {from: accounts[0]});
		const uint64MbJxL0X = await Liquidity_v8Vzj10xB.setRate.call(uintlyBmLli, {from: accounts[1]});
		const addressiAloL8 = await Liquidity_v8Vzj10xB.transferOwnership.call(addressyyfUvLq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LJWVFW3 = await Liquidity_v8Vzj10xB.calculate.call(addressdFhlVOd, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCjMGaYZ = "5zi0Mumrjefh9v1xbLnSnwUHJe"
		const addresshfnw4ET = accounts[1]
		const addressVmk4B9i = accounts[1]
		const uintPJt6E9J = BigInt("2038")
		const uintNu3AZ7m = BigInt("263")
		const Liquidity_v8OdBTO7z = await Liquidity_v8.new(stringCjMGaYZ, addresshfnw4ET, addressVmk4B9i, uintPJt6E9J, uintNu3AZ7m, {from: accounts[3]});
		const addressHCUUn34 = accounts[4]
		const addressLE7h3D0 = accounts[3]
		const uintR7q1rMR = BigInt("1049")
		const 
UYxEir = await Liquidity_v8OdBTO7z.userDeposits.call(addressHCUUn34, {from: "0x0000000000000000000000000000000000000001"});
		const addressklhLS64 = await Liquidity_v8OdBTO7z.transferOwnership.call(addressLE7h3D0, {from: accounts[3]});
		await Liquidity_v8OdBTO7z.onlyOwner.call({from: accounts[4]});
		const uint256zXlokck = await Liquidity_v8OdBTO7z.changeLockDuration.call(uintR7q1rMR, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCjMGaYZ = "5zi0Mumrjefh9v1xbLnSnwUHJe"
		const addressqUxMZ0M = accounts[1]
		const addresswGab4rk = accounts[1]
		const uinthmXR4cq = BigInt("2038")
		const uintcwBP8uE = BigInt("263")
		const Liquidity_v8OdBTO7z = await Liquidity_v8.new(stringCjMGaYZ, addressqUxMZ0M, addresswGab4rk, uinthmXR4cq, uintcwBP8uE, {from: accounts[3]});
		const addressOf72okV = accounts[4]
		const uintwFAOQp = BigInt("1048")
		const 
UYxEir = await Liquidity_v8OdBTO7z.userDeposits.call(addressOf72okV, {from: "0x0000000000000000000000000000000000000001"});
		const addressLUyPgkg = await Liquidity_v8OdBTO7z.owner.call({from: accounts[2]});
		const uint256zXlokck = await Liquidity_v8OdBTO7z.changeLockDuration.call(uintwFAOQp, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCjMGaYZ = "5zi0Mumrjefh9v1xbLnSnwUHJe"
		const addressAQeynlh = accounts[1]
		const addressmGQMf8 = accounts[1]
		const uintCH4Ee3 = BigInt("2038")
		const uintot0eOtk = BigInt("263")
		const Liquidity_v8OdBTO7z = await Liquidity_v8.new(stringCjMGaYZ, addressAQeynlh, addressmGQMf8, uintCH4Ee3, uintot0eOtk, {from: accounts[3]});
		const addressxdXReRn = accounts[4]
		const uintz78RpLi = BigInt("1103")
		const 
UYxEir = await Liquidity_v8OdBTO7z.userDeposits.call(addressxdXReRn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YAS1Gwf = await Liquidity_v8OdBTO7z.changeLockDuration.call(uintz78RpLi, {from: accounts[3]});
		const addressCTC5TTI = await Liquidity_v8OdBTO7z.owner.call({from: accounts[0]});
	});
})