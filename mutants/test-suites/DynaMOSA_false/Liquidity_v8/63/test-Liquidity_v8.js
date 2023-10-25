const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringiCIek8q = "wbZgjHByy1SZTfKipHUBfYXCy6B2bHR66VRjlEdBMqmS"
		const addressO2Mmv25 = accounts[4]
		const addressXmyv0H = accounts[2]
		const uintJGGyuKJ = BigInt("167")
		const uintPzbKOJw = BigInt("1461")
		const Liquidity_v8Ot65a1 = await Liquidity_v8.new(stringiCIek8q, addressO2Mmv25, addressXmyv0H, uintJGGyuKJ, uintPzbKOJw, {from: accounts[4]});
		const uintenE6cXl = BigInt("238")
		const uintLp8rNzt = BigInt("1791")
		const uinttisNHdj = BigInt("327")
		const addresso4eeL9V = accounts[5]
		const uint256Vxrxzbx = await Liquidity_v8Ot65a1.changeLockDuration.call(uintenE6cXl, {from: accounts[2]});
		const boolTDS4w1x = await Liquidity_v8Ot65a1.withdraw.call({from: accounts[4]});
		await Liquidity_v8Ot65a1.renounceOwnership.call({from: accounts[1]});
		const boolMdvNWU1 = await Liquidity_v8Ot65a1.stake.call(uintLp8rNzt, {from: accounts[1]});
		const uint256pBE0811 = await Liquidity_v8Ot65a1.changeLockDuration.call(uinttisNHdj, {from: accounts[0]});
		const uint256XWw84nT = await Liquidity_v8Ot65a1.calculate.call(addresso4eeL9V, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringsag9ro = "wkXuweiWTPQALk5vopiIl42EXH7M0BbwCb9lbHcyecJMzTGth4kgx0HvY9jkam05TUcO"
		const addressWH6SPJo = accounts[4]
		const addressvdTBO3 = accounts[4]
		const uintnhmAyQd = BigInt("1315")
		const uintrpADOfU = BigInt("1697")
		const Liquidity_v82Fm63v = await Liquidity_v8.new(stringsag9ro, addressWH6SPJo, addressvdTBO3, uintnhmAyQd, uintrpADOfU, {from: accounts[4]});
		const addressyjygb35 = accounts[3]
		const addressHZ16Gv3 = accounts[5]
		const boolwmwYgz1 = await Liquidity_v82Fm63v.emergencyWithdraw.call({from: accounts[2]});
		const 
u9IKvgU = await Liquidity_v82Fm63v.userDeposits.call(addressyjygb35, {from: accounts[4]});
		const addressPFBcc5o = await Liquidity_v82Fm63v.transferOwnership.call(addressHZ16Gv3, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHlzRcQD = "JnVDlklU2Cxf"
		const addressD2EWPH6 = accounts[1]
		const addressiRfH5yK = accounts[2]
		const uint3wwkrs = BigInt("896")
		const uintz6iVRTh = BigInt("176")
		const Liquidity_v8VdzdKni = await Liquidity_v8.new(stringHlzRcQD, addressD2EWPH6, addressiRfH5yK, uint3wwkrs, uintz6iVRTh, {from: accounts[5]});
		const boolHY19nCn = await Liquidity_v8VdzdKni.withdraw.call({from: accounts[4]});
		const booleYmPP0H = await Liquidity_v8VdzdKni.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQyhzRs = "xogJttlCvs1niApQi41cc2Kl7vyAWzeRnKyvKIK4JNTQmU0zZtHN"
		const addressmsHrpS2 = accounts[4]
		const addressNZl2AOB = accounts[5]
		const uintgy2y8Oh = BigInt("1849")
		const uintC1qTBK = BigInt("998")
		const Liquidity_v8n0QVH70 = await Liquidity_v8.new(stringQyhzRs, addressmsHrpS2, addressNZl2AOB, uintgy2y8Oh, uintC1qTBK, {from: accounts[1]});
		const uintM6zfJUl = BigInt("49")
		const boolH8TFvcx = await Liquidity_v8n0QVH70.stake.call(uintM6zfJUl, {from: accounts[3]});
		await Liquidity_v8n0QVH70.renounceOwnership.call({from: accounts[4]});
		const boolECMAs7i = await Liquidity_v8n0QVH70.isOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringGsHj375 = "qrWpBU6YbYp1X"
		const addresscTrreLF = accounts[4]
		const addressNpTkism = accounts[4]
		const uintGOslLi = BigInt("1535")
		const uintLqTE3mN = BigInt("1976")
		const Liquidity_v8jY8CrJr = await Liquidity_v8.new(stringGsHj375, addresscTrreLF, addressNpTkism, uintGOslLi, uintLqTE3mN, {from: accounts[4]});
		const addressUqAQMV9 = accounts[5]
		const uintff4mJ4F = BigInt("318")
		const address4vjc2B = accounts[4]
		const uintH8vlAvw = BigInt("469")
		const addressah91aQ3 = accounts[0]
		const 
aqynB4u = await Liquidity_v8jY8CrJr._hasAllowance.call(address4vjc2B, uintff4mJ4F, addressUqAQMV9, {from: "0x0000000000000000000000000000000000000001"});
		const boolbxDvSTY = await Liquidity_v8jY8CrJr.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const uint64MBPGiVR = await Liquidity_v8jY8CrJr.setRate.call(uintH8vlAvw, {from: accounts[2]});
		const 
kQoQTT = await Liquidity_v8jY8CrJr.userDeposits.call(addressah91aQ3, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringz8fMgsf = "fRpCPtjW79sgEG4ecpV61nJF5w8nrCUokq8vHvO7vLR1EPMzgYW5GoQcznW1o9ohB8EraT9ICPGAeNPqGHOhyIBh1BCQbS"
		const addressNu0jlmh = accounts[2]
		const addressgXfwSw6 = accounts[1]
		const uintIoTBc4n = BigInt("2046")
		const uintDaR7Yth = BigInt("1529")
		const Liquidity_v8OOLoswb = await Liquidity_v8.new(stringz8fMgsf, addressNu0jlmh, addressgXfwSw6, uintIoTBc4n, uintDaR7Yth, {from: accounts[4]});
		const uintdm7xogD = BigInt("629")
		const uintEWzWjV9 = BigInt("557")
		const addressUcg40KW = await Liquidity_v8OOLoswb.owner.call({from: accounts[3]});
		const uint64Be7h2Ff = await Liquidity_v8OOLoswb.setRate.call(uintdm7xogD, {from: accounts[2]});
		const boolDCIVCnG = await Liquidity_v8OOLoswb.withdraw.call({from: accounts[4]});
		const boolHWg6dGz = await Liquidity_v8OOLoswb.stake.call(uintEWzWjV9, {from: accounts[2]});
		const boolFb6reQJ = await Liquidity_v8OOLoswb.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringtNW8neT = "Tn9q"
		const addressSXPsmdF = accounts[2]
		const addressEx5JkjD = accounts[4]
		const uintpZzmDuw = BigInt("2027")
		const uintWLL9RZs = BigInt("107")
		const Liquidity_v8Ainarr = await Liquidity_v8.new(stringtNW8neT, addressSXPsmdF, addressEx5JkjD, uintpZzmDuw, uintWLL9RZs, {from: accounts[3]});
		const addressLddTmW0 = accounts[2]
		const uintAmwIcko = BigInt("1726")
		const 
sWjwwTB = await Liquidity_v8Ainarr.userDeposits.call(addressLddTmW0, {from: accounts[2]});
		const boolVoUZMwp = await Liquidity_v8Ainarr.stake.call(uintAmwIcko, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringtNW8neT = "Tn9q"
		const addressnj1CjB8 = accounts[2]
		const addressfGR6yRa = accounts[4]
		const uintQ4kMXRG = BigInt("2027")
		const uintfPGpQTs = BigInt("107")
		const Liquidity_v8Ainarr = await Liquidity_v8.new(stringtNW8neT, addressnj1CjB8, addressfGR6yRa, uintQ4kMXRG, uintfPGpQTs, {from: accounts[3]});
		const addresspuCkjp1 = "0x0000000000000000000000000000000000000001"
		const addresse3GHOy = accounts[2]
		const addressJlPFT0G = accounts[0]
		const uintP0lz8en = BigInt("1360")
		const addressQB7syf4 = accounts[2]
		const uinta8Yn8ax = BigInt("1726")
		const uint256HCzaaMj = await Liquidity_v8Ainarr.calculate.call(addresspuCkjp1, {from: accounts[1]});
		const 
sWjwwTB = await Liquidity_v8Ainarr.userDeposits.call(addresse3GHOy, {from: accounts[2]});
		const 
ZGdVUHo = await Liquidity_v8Ainarr._hasAllowance.call(addressQB7syf4, uintP0lz8en, addressJlPFT0G, {from: accounts[1]});
		const addressHhFjrq = await Liquidity_v8Ainarr.owner.call({from: accounts[1]});
		const boolVoUZMwp = await Liquidity_v8Ainarr.stake.call(uinta8Yn8ax, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringtNW8neT = "Tn9q"
		const addressYVKrYoE = accounts[2]
		const addressgj9Nlbh = accounts[4]
		const uintEt8GaG9 = BigInt("2027")
		const uintIW3fzP = BigInt("107")
		const Liquidity_v8Ainarr = await Liquidity_v8.new(stringtNW8neT, addressYVKrYoE, addressgj9Nlbh, uintEt8GaG9, uintIW3fzP, {from: accounts[3]});
		const addressT8elnZM = accounts[3]
		const addressHNcJX0l = accounts[0]
		const 
sWjwwTB = await Liquidity_v8Ainarr.userDeposits.call(addressT8elnZM, {from: accounts[2]});
		const addressvVhzS2s = await Liquidity_v8Ainarr.transferOwnership.call(addressHNcJX0l, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringh41zHZR = "jpvYBNdWNef8VUjid61l"
		const addressxPtbzHr = accounts[4]
		const addressi73O7BW = accounts[2]
		const uintuh4tSU = BigInt("1706")
		const uintd0WXB2p = BigInt("863")
		const Liquidity_v8RRa32T = await Liquidity_v8.new(stringh41zHZR, addressxPtbzHr, addressi73O7BW, uintuh4tSU, uintd0WXB2p, {from: accounts[0]});
		const uintwAhvcUC = BigInt("1603")
		const uintCO90pg = BigInt("1581")
		const uint64HWPOlMm = await Liquidity_v8RRa32T.setRate.call(uintwAhvcUC, {from: accounts[0]});
		await Liquidity_v8RRa32T.renounceOwnership.call({from: accounts[1]});
		const booll7yxQn5 = await Liquidity_v8RRa32T.addReward.call(uintCO90pg, {from: accounts[0]});
		const boolpYMCB8 = await Liquidity_v8RRa32T.withdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringwYfphe = "vyig6yRRK"
		const addressXxebQPP = "0x0000000000000000000000000000000000000001"
		const addressHBvDKL2 = accounts[0]
		const uintCFyHsi1 = BigInt("1794")
		const uintGWokm4x = BigInt("1452")
		const Liquidity_v8Mgy1oxi = await Liquidity_v8.new(stringwYfphe, addressXxebQPP, addressHBvDKL2, uintCFyHsi1, uintGWokm4x, {from: accounts[0]});
		const uintoCLoQqG = BigInt("428")
		const addressGDcUM3D = accounts[4]
		const uint256N1gy2s = await Liquidity_v8Mgy1oxi.changeLockDuration.call(uintoCLoQqG, {from: accounts[0]});
		const uint256JJVLW5U = await Liquidity_v8Mgy1oxi.calculate.call(addressGDcUM3D, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHww5DY0 = "8NbBLfGWadxSvoyLrfMqnY"
		const addressBc7s0mF = accounts[2]
		const addressj7pBB7O = accounts[2]
		const uintdZBWLWK = BigInt("1273")
		const uintT8RgMA = BigInt("1785")
		const Liquidity_v8yD8Vjun = await Liquidity_v8.new(stringHww5DY0, addressBc7s0mF, addressj7pBB7O, uintdZBWLWK, uintT8RgMA, {from: "0x0000000000000000000000000000000000000001"});
		const addressMRyViKa = "0x0000000000000000000000000000000000000001"
		const uintmALCESu = BigInt("1303")
		const boolAr3Z6W4 = await Liquidity_v8yD8Vjun.emergencyWithdraw.call({from: accounts[4]});
		const addressBrpjR2Q = await Liquidity_v8yD8Vjun.transferOwnership.call(addressMRyViKa, {from: accounts[0]});
		const uint256dDSzI0q = await Liquidity_v8yD8Vjun.changeLockDuration.call(uintmALCESu, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringwYfphe = "vyig6yRRK"
		const addresshWadpvK = "0x0000000000000000000000000000000000000001"
		const addressVnJFKk8 = accounts[0]
		const uintw9M2088 = BigInt("1794")
		const uinttWe88k5 = BigInt("1452")
		const Liquidity_v8Mgy1oxi = await Liquidity_v8.new(stringwYfphe, addresshWadpvK, addressVnJFKk8, uintw9M2088, uinttWe88k5, {from: accounts[0]});
		const addresslf7gcHY = accounts[3]
		await Liquidity_v8Mgy1oxi.renounceOwnership.call({from: accounts[0]});
		const uint256JJVLW5U = await Liquidity_v8Mgy1oxi.calculate.call(addresslf7gcHY, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringtNW8neT = "Tn9q"
		const addressVtXCdbj = accounts[2]
		const addressHW50sk7 = accounts[4]
		const uintU3trpYm = BigInt("2027")
		const uintpjBko4d = BigInt("107")
		const Liquidity_v8Ainarr = await Liquidity_v8.new(stringtNW8neT, addressVtXCdbj, addressHW50sk7, uintU3trpYm, uintpjBko4d, {from: accounts[3]});
		const addressuEiFp3s = "0x00000000000000000000000000000000000000-1"
		const addressWnCDWvF = "0x0000000000000000000000000000000000000001"
		const addressZKQ5Muv = accounts[4]
		const uintFtbGlPm = BigInt("1360")
		const addressus2x7a = accounts[2]
		const uintMqvTb9M = BigInt("1246")
		const uintuo3eA00 = BigInt("1726")
		const uint256HCzaaMj = await Liquidity_v8Ainarr.calculate.call(addressuEiFp3s, {from: accounts[1]});
		const 
sWjwwTB = await Liquidity_v8Ainarr.userDeposits.call(addressWnCDWvF, {from: accounts[2]});
		const 
ZGdVUHo = await Liquidity_v8Ainarr._hasAllowance.call(addressus2x7a, uintFtbGlPm, addressZKQ5Muv, {from: accounts[1]});
		const addressHhFjrq = await Liquidity_v8Ainarr.owner.call({from: accounts[1]});
		const uint256SVEPHa2 = await Liquidity_v8Ainarr.changeLockDuration.call(uintMqvTb9M, {from: accounts[0]});
		const boolVoUZMwp = await Liquidity_v8Ainarr.stake.call(uintuo3eA00, {from: accounts[2]});
	});
})