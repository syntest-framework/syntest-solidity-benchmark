const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100BOtnf87 = await Token50X100.new({from: accounts[0]});
		const uintkxfKKa = BigInt("1288")
		const addressQkIjYMc = accounts[0]
		const addressaKrFpM4 = accounts[2]
		const addressxNJ1jXW = accounts[1]
		const addressTAIne3C = accounts[3]
		const uintZYBwBSg = BigInt("672")
		const addressWwVY0GO = accounts[0]
		const addressJQXh7Ke = accounts[1]
		const boolkfWwG9L = await Token50X100BOtnf87.setMaxLockPeriod.call(uintkxfKKa, {from: accounts[4]});
		const uint256ef3vo6 = await Token50X100BOtnf87.balanceOf.call(addressQkIjYMc, {from: accounts[0]});
//		await Token50X100BOtnf87.setTokenContract.call(addressaKrFpM4, {from: accounts[1]});
//		await Token50X100BOtnf87.setLinkingAddresses.call(addressTAIne3C, addressxNJ1jXW, {from: accounts[4]});
//		const boolKG3BAcz = await Token50X100BOtnf87.transferFrom.call(addressJQXh7Ke, addressWwVY0GO, uintZYBwBSg, {from: accounts[3]});

		assert.equal(boolkfWwG9L, false)
		assert.equal(uint256ef3vo6, BigInt("0"))
		await expect(Token50X100BOtnf87.setTokenContract.call(addressaKrFpM4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ovlpPDR = await Token50X100.new({from: accounts[1]});
		const booldbonOGN = false
		const addressO56mTeN = accounts[0]
		const uintMVp4nGl = BigInt("40")
		const addressTXFSsdP = accounts[5]
		const addressqLwLBoO = accounts[0]
		const addressEXWrzs4 = accounts[4]
		const uint256zipE8qx = await Token50X100ovlpPDR.totalSupply.call({from: accounts[3]});
//		await Token50X100ovlpPDR.setWhiteList.call(addressO56mTeN, booldbonOGN, {from: accounts[4]});
//		const boolFOZq1Q5 = await Token50X100ovlpPDR.transferFrom.call(addressqLwLBoO, addressTXFSsdP, uintMVp4nGl, {from: accounts[0]});
//		const addressV7gDAUj = await Token50X100ovlpPDR.transferOwnership.call(addressEXWrzs4, {from: accounts[3]});

		assert.equal(uint256zipE8qx, BigInt("4714285714285710"))
		await expect(Token50X100ovlpPDR.setWhiteList.call(addressO56mTeN, booldbonOGN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LKKOe2L = await Token50X100.new({from: accounts[4]});
		const uinthW5xUKp = BigInt("1176")
		const addressRdgqfYb = accounts[5]
		const uintQS7j3Cu = BigInt("511")
		const addressPJ3E1ol = accounts[1]
		const address9bv11R = accounts[1]
		const addresslbRP5Zq = accounts[3]
//		const boolgXKdWxU = await Token50X100LKKOe2L.transfer.call(addressRdgqfYb, uinthW5xUKp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRcBWFKh = await Token50X100LKKOe2L.transferFrom.call(address9bv11R, addressPJ3E1ol, uintQS7j3Cu, {from: accounts[1]});
//		const uint256leTZAAH = await Token50X100LKKOe2L.balanceOf.call(addresslbRP5Zq, {from: accounts[1]});

		await expect(Token50X100LKKOe2L.transfer.call(addressRdgqfYb, uinthW5xUKp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintvYEvNo9 = BigInt("1930")
		const addressRlXVH8G = accounts[4]
		const uintMmFQeVs = BigInt("1104")
		const addressRZChp5H = accounts[5]
		const boolLSCQH5Z = await Token50X100FiwaGDU.approve.call(addressRlXVH8G, uintvYEvNo9, {from: accounts[0]});
		const boolvfY0zTb = await Token50X100FiwaGDU.decreaseApproval.call(addressRZChp5H, uintMmFQeVs, {from: accounts[0]});

		assert.equal(boolLSCQH5Z, true)
		assert.equal(boolvfY0zTb, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100hk8bkxy = await Token50X100.new({from: accounts[3]});
		const addresspzHfyQ5 = accounts[4]
		const addressiLraER = accounts[5]
//		await Token50X100hk8bkxy.onlyOwner.call({from: accounts[4]});
//		await Token50X100hk8bkxy.setLinkingAddresses.call(addressiLraER, addresspzHfyQ5, {from: accounts[5]});

		await expect(Token50X100hk8bkxy.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Xawtk8H = await Token50X100.new({from: accounts[5]});
		const uintceubgYA = BigInt("220")
		const addressFBl5jR = accounts[3]
		const uintFzDqvc = BigInt("1955")
		const addressQJzsgj0 = accounts[2]
		const addressGI1JuBG = accounts[0]
		const uintDGlziI = BigInt("1070")
		const address2P8LtX = accounts[0]
		const boolIfRd7SW = true
		const addressd8xtcYr = accounts[1]
		const bool2sxVQM = await Token50X100Xawtk8H.approve.call(addressFBl5jR, uintceubgYA, {from: accounts[0]});
//		const bool1lY41U = await Token50X100Xawtk8H.transferFrom.call(addressGI1JuBG, addressQJzsgj0, uintFzDqvc, {from: accounts[2]});
//		const boollE19qp4 = await Token50X100Xawtk8H.transfer.call(address2P8LtX, uintDGlziI, {from: accounts[4]});
//		await Token50X100Xawtk8H.setWhiteListReceivers.call(addressd8xtcYr, boolIfRd7SW, {from: accounts[1]});

		assert.equal(bool2sxVQM, true)
		await expect(Token50X100Xawtk8H.transferFrom.call(addressGI1JuBG, addressQJzsgj0, uintFzDqvc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uWTV2pR = await Token50X100.new({from: accounts[3]});
		const uintI3RLuaC = BigInt("286")
		const uint8awJph = BigInt("1591")
		const address1X1sQO = accounts[3]
		const addressChpiSSF = accounts[5]
		const addressInLr8WN = accounts[4]
		const uintrX4GuGT = BigInt("1665")
		const addressGrgIvuD = accounts[0]
		const uintHuKXhCN = BigInt("350")
		const uintZo0b7UL = BigInt("1540")
		const addressA3G2QVs = accounts[0]
//		const boolb6DOYal = await Token50X100uWTV2pR.safeLock.call(uint8awJph, uintI3RLuaC, {from: accounts[1]});
//		const addressc6J6eav = await Token50X100uWTV2pR.setOriginalContract.call(address1X1sQO, {from: accounts[3]});
//		const uint256jFfO2Sw = await Token50X100uWTV2pR.allowance.call(addressInLr8WN, addressChpiSSF, {from: "0x0000000000000000000000000000000000000001"});
//		const booljEgBypd = await Token50X100uWTV2pR.decreaseApproval.call(addressGrgIvuD, uintrX4GuGT, {from: accounts[4]});
//		const boolPmCWZAf = await Token50X100uWTV2pR.setVesting.call(addressA3G2QVs, uintZo0b7UL, uintHuKXhCN, {from: accounts[1]});

		await expect(Token50X100uWTV2pR.safeLock.call(uint8awJph, uintI3RLuaC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NIkl6d0 = await Token50X100.new({from: accounts[0]});
		const booljhV9tXV = true
		const addressQxDuGjO = accounts[0]
		const uintBwN4oq = BigInt("1598")
		const addressH8sNRiL = accounts[5]
		const addressfXF68iU = accounts[4]
		const uintFGRKcBM = BigInt("1456")
		const addressLaFdZAU = accounts[4]
		const uinteWTsLcH = BigInt("1674")
//		await Token50X100NIkl6d0.setWhiteListReceivers.call(addressQxDuGjO, booljhV9tXV, {from: accounts[0]});
//		const boolAPwyDn = await Token50X100NIkl6d0.issueTokens.call(addressfXF68iU, addressH8sNRiL, uintBwN4oq, {from: accounts[4]});
//		const booljpaR16X = await Token50X100NIkl6d0.increaseApproval.call(addressLaFdZAU, uintFGRKcBM, {from: accounts[0]});
//		const boolpEqq7YF = await Token50X100NIkl6d0.setMaxLockPeriod.call(uinteWTsLcH, {from: accounts[3]});

		await expect(Token50X100NIkl6d0.setWhiteListReceivers.call(addressQxDuGjO, booljhV9tXV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sVpCzdv = await Token50X100.new({from: accounts[1]});
		const boolfjP4qiV = false
		const addressoQv5qdK = accounts[2]
		const uintVOespPG = BigInt("1989")
		const uintiyt943K = BigInt("40")
		const addressdMkvwmF = accounts[2]
		const addressX6cXxq1 = "0x0000000000000000000000000000000000000001"
		const addressHT5wu9D = accounts[3]
//		await Token50X100sVpCzdv.setWhiteList.call(addressoQv5qdK, boolfjP4qiV, {from: accounts[1]});
//		const boolsQ6yK3a = await Token50X100sVpCzdv.setMaxLockPeriod.call(uintVOespPG, {from: accounts[0]});
//		const boolxcBm4p5 = await Token50X100sVpCzdv.issueTokens.call(addressX6cXxq1, addressdMkvwmF, uintiyt943K, {from: accounts[1]});
//		await Token50X100sVpCzdv.setTokenContract.call(addressHT5wu9D, {from: accounts[3]});
//		await Token50X100sVpCzdv.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100sVpCzdv.setWhiteList.call(addressoQv5qdK, boolfjP4qiV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LKKOe2L = await Token50X100.new({from: accounts[4]});
		const uintPz80NSV = BigInt("1626")
		const uintURP5zAt = BigInt("1329")
		const uintTvf9N2v = BigInt("904")
		const uintm1rmFFA = BigInt("1176")
		const addressS8kmytK = accounts[5]
		const uintLmAQhLy = BigInt("511")
		const addressvGFmphW = accounts[1]
		const addresszAQ1QJd = accounts[1]
		const bool2miczB = await Token50X100LKKOe2L.setMaxLockPeriod.call(uintPz80NSV, {from: accounts[3]});
//		await Token50X100LKKOe2L.release.call({from: accounts[4]});
//		const boolcCedJIq = await Token50X100LKKOe2L.safeLock.call(uintTvf9N2v, uintURP5zAt, {from: accounts[4]});
//		const boolgXKdWxU = await Token50X100LKKOe2L.transfer.call(addressS8kmytK, uintm1rmFFA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRcBWFKh = await Token50X100LKKOe2L.transferFrom.call(addresszAQ1QJd, addressvGFmphW, uintLmAQhLy, {from: accounts[1]});

		assert.equal(bool2miczB, false)
		await expect(Token50X100LKKOe2L.release.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LKKOe2L = await Token50X100.new({from: accounts[4]});
		const uintfUIZCkb = BigInt("137")
		const addressWmkXTCl = accounts[4]
		const addressuP7atQf = accounts[0]
		const uintlZTCJz = BigInt("1176")
		const addressQ1BrBQ = accounts[5]
		const boolZDicn3N = await Token50X100LKKOe2L.setMaxLockPeriod.call(uintfUIZCkb, {from: accounts[3]});
		const uint256QI2Lutq = await Token50X100LKKOe2L.allowance.call(addressuP7atQf, addressWmkXTCl, {from: accounts[2]});
//		const boolgXKdWxU = await Token50X100LKKOe2L.transfer.call(addressQ1BrBQ, uintlZTCJz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZDicn3N, false)
		assert.equal(uint256QI2Lutq, BigInt("0"))
		await expect(Token50X100LKKOe2L.transfer.call(addressQ1BrBQ, uintlZTCJz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LKKOe2L = await Token50X100.new({from: accounts[4]});
		const uintT7NYCwO = BigInt("814")
		const addressIDpySkY = accounts[2]
		const addressWimXdla = accounts[3]
		const addresstQff17l = accounts[3]
		const addresszySzcOu = "0x0000000000000000000000000000000000000001"
		const uintUBvWsaP = BigInt("1176")
		const addressYJyQNe = accounts[5]
		const uintB9rW58H = BigInt("536")
		const addresshl46xJ = accounts[1]
		const addressApM0edy = accounts[1]
		const boolCmlsQuu = await Token50X100LKKOe2L.increaseApproval.call(addressIDpySkY, uintT7NYCwO, {from: accounts[4]});
//		const addressyLDtNah = await Token50X100LKKOe2L.transferOwnership.call(addressWimXdla, {from: accounts[3]});
//		const uint256Rk34Ku = await Token50X100LKKOe2L.allowance.call(addresszySzcOu, addresstQff17l, {from: accounts[2]});
//		const boolgXKdWxU = await Token50X100LKKOe2L.transfer.call(addressYJyQNe, uintUBvWsaP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRcBWFKh = await Token50X100LKKOe2L.transferFrom.call(addressApM0edy, addresshl46xJ, uintB9rW58H, {from: accounts[1]});

		assert.equal(boolCmlsQuu, true)
		await expect(Token50X100LKKOe2L.transferOwnership.call(addressWimXdla, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100o2IPByS = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEVhYbXO = accounts[1]
		const uintP48qaIB = BigInt("1199")
		const addresshvlmnpe = accounts[4]
		const addressj2bmnZB = await Token50X100o2IPByS.setOriginalContract.call(addressEVhYbXO, {from: accounts[3]});
		await Token50X100o2IPByS.lock.call({from: accounts[5]});
		const boolhnsFPne = await Token50X100o2IPByS.transfer.call(addresshvlmnpe, uintP48qaIB, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100LKKOe2L = await Token50X100.new({from: accounts[4]});
		const uintM9OAgl5 = BigInt("511")
		const addresslSH5R2t = accounts[2]
		const addressw2cO9yd = accounts[1]
		const uintjiSxlL8 = BigInt("1378")
		const addressLjNiNV5 = accounts[4]
		const uintQsRjcDk = BigInt("1688")
		const uintljTvZsf = BigInt("733")
//		await Token50X100LKKOe2L.lock.call({from: accounts[4]});
//		const boolRcBWFKh = await Token50X100LKKOe2L.transferFrom.call(addressw2cO9yd, addresslSH5R2t, uintM9OAgl5, {from: accounts[1]});
//		const boolwJ8SJ3 = await Token50X100LKKOe2L.transfer.call(addressLjNiNV5, uintjiSxlL8, {from: accounts[4]});
//		await Token50X100LKKOe2L.onlyOwner.call({from: accounts[2]});
//		const bool26gKLx = await Token50X100LKKOe2L.safeLock.call(uintljTvZsf, uintQsRjcDk, {from: accounts[1]});

		await expect(Token50X100LKKOe2L.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintTnR6dA = BigInt("1104")
		const addressSbh9CC8 = accounts[6]
		const uintHfVlSEu = BigInt("1906")
		const uintzaTkQoI = BigInt("726")
		const addresso7gvqv = accounts[1]
		const boolvfY0zTb = await Token50X100FiwaGDU.decreaseApproval.call(addressSbh9CC8, uintTnR6dA, {from: accounts[0]});
		const boolt9TH2V = await Token50X100FiwaGDU.setVesting.call(addresso7gvqv, uintzaTkQoI, uintHfVlSEu, {from: accounts[0]});

		assert.equal(boolt9TH2V, true)
		assert.equal(boolvfY0zTb, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintaqg24Zf = BigInt("111")
		const string1fylvr = "zyMHK4PuUWIucOCABBn65RUY1T"
		const stringCvsC5UK = "WQEJ1CveghiCgWrSQ8KOPzMxFCYlNT8kbfiUNe3rMQicpP8MFuhEzmhcHcVtK64qchIgaYpA6miR3pmPISkk3v"
		const uintyWosBb5 = BigInt("418")
		const addressBzJadQW = accounts[3]
		const uintcDBjsL9 = BigInt("1425")
		const uintYdFMafK = BigInt("8")
		const addresslb9g40J = accounts[3]
		const uintNtB2te2 = BigInt("1779")
		const uintT5sZZAt = BigInt("1829")
		const addressdVIrdcn = accounts[3]
		const addressu4hBNf = accounts[3]
		const uintKPXCCDA = BigInt("129")
		const uintYXu7wDt = BigInt("1699")
		const boolh2M9v2T = await Token50X100FiwaGDU.setSymbolNameDecimals.call(stringCvsC5UK, string1fylvr, uintaqg24Zf, {from: accounts[0]});
		const boolNwrAxtK = await Token50X100FiwaGDU.increaseApproval.call(addressBzJadQW, uintyWosBb5, {from: accounts[1]});
		const booloJrAYGl = await Token50X100FiwaGDU.setMaxLockPeriod.call(uintcDBjsL9, {from: accounts[4]});
		const boolsRUzxJ = await Token50X100FiwaGDU.decreaseApproval.call(addresslb9g40J, uintYdFMafK, {from: accounts[2]});
//		const boolbHFA4rF = await Token50X100FiwaGDU._transfer.call(addressu4hBNf, addressdVIrdcn, uintT5sZZAt, uintNtB2te2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDB41tRr = await Token50X100FiwaGDU.safeLock.call(uintYXu7wDt, uintKPXCCDA, {from: accounts[3]});

		assert.equal(boolNwrAxtK, true)
		assert.equal(booloJrAYGl, false)
		assert.equal(boolsRUzxJ, true)
		await expect(Token50X100FiwaGDU._transfer.call(addressu4hBNf, addressdVIrdcn, uintT5sZZAt, uintNtB2te2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Agx9bKh = await Token50X100.new({from: accounts[2]});
		const uintOJYrHga = BigInt("1009")
		const addressZibazFU = "0x0000000000000000000000000000000000000001"
		const uintADV3Tcb = BigInt("240")
		const uintHJUVz7B = BigInt("2009")
		const addressjLiEYOk = accounts[4]
		const addresswCVnxxs = accounts[2]
		const uintdYotZO1 = BigInt("341")
		const addressrSRrDUJ = accounts[0]
		const boolrRpevVo = await Token50X100Agx9bKh.decreaseApproval.call(addressZibazFU, uintOJYrHga, {from: accounts[1]});
//		const booldFc3Q2B = await Token50X100Agx9bKh._transfer.call(addresswCVnxxs, addressjLiEYOk, uintHJUVz7B, uintADV3Tcb, {from: accounts[2]});
//		const booltKgDIob = await Token50X100Agx9bKh.increaseApproval.call(addressrSRrDUJ, uintdYotZO1, {from: accounts[5]});

		assert.equal(boolrRpevVo, true)
		await expect(Token50X100Agx9bKh._transfer.call(addresswCVnxxs, addressjLiEYOk, uintHJUVz7B, uintADV3Tcb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100X3HBbj9 = await Token50X100.new({from: accounts[3]});
		const addressQYya7GU = accounts[4]
		const addressOnvGrux = accounts[4]
		const addressIsAJNcL = accounts[1]
		const uintGRtsgc8 = BigInt("1676")
		const uinto197NbK = BigInt("8")
		const addressX9J7BEL = accounts[0]
		const addressIPw57nj = accounts[3]
//		await Token50X100X3HBbj9.setLinkingAddresses.call(addressOnvGrux, addressQYya7GU, {from: accounts[3]});
//		const uint256chtXvc3 = await Token50X100X3HBbj9.balanceOf.call(addressIsAJNcL, {from: accounts[3]});
//		const boolUYpMtZZ = await Token50X100X3HBbj9._transfer.call(addressIPw57nj, addressX9J7BEL, uinto197NbK, uintGRtsgc8, {from: accounts[0]});

		await expect(Token50X100X3HBbj9.setLinkingAddresses.call(addressOnvGrux, addressQYya7GU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintfmC1X8 = BigInt("418")
		const addressHmDzsMk = accounts[3]
		const uintPyIWkra = BigInt("282")
		const addressVh4sFPs = accounts[0]
		const uintcGRrRM = BigInt("8")
		const addressO5Sdiry = accounts[2]
		const uinttntqsHF = BigInt("1280")
		const uintxYKELg3 = BigInt("1291")
		const addressIYtHS5s = accounts[3]
		const uintMhR1th7 = BigInt("129")
		const uintqDl2oH = BigInt("1698")
		const boolNwrAxtK = await Token50X100FiwaGDU.increaseApproval.call(addressHmDzsMk, uintfmC1X8, {from: accounts[1]});
		const boolI8Hz5ni = await Token50X100FiwaGDU.setMaxLockPeriod.call(uintPyIWkra, {from: accounts[4]});
		const addressYrUsd3 = await Token50X100FiwaGDU.transferOwnership.call(addressVh4sFPs, {from: accounts[0]});
		const boolsRUzxJ = await Token50X100FiwaGDU.decreaseApproval.call(addressO5Sdiry, uintcGRrRM, {from: accounts[2]});
//		const bool3Rfyu7 = await Token50X100FiwaGDU.setVesting.call(addressIYtHS5s, uintxYKELg3, uinttntqsHF, {from: accounts[3]});
//		const boolDB41tRr = await Token50X100FiwaGDU.safeLock.call(uintqDl2oH, uintMhR1th7, {from: accounts[3]});

		assert.equal(boolI8Hz5ni, false)
		assert.equal(boolNwrAxtK, true)
		assert.equal(boolsRUzxJ, true)
		await expect(Token50X100FiwaGDU.setVesting.call(addressIYtHS5s, uintxYKELg3, uinttntqsHF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintRbMMXbt = BigInt("418")
		const addressSumlCZP = accounts[3]
		const uintaQGChB = BigInt("0")
		const addressNzLxqgV = accounts[2]
		const uintXGPzNeV = BigInt("129")
		const uintnSQO69A = BigInt("1699")
		const uintW3ku7K = BigInt("1191")
		const addressOWqbWZ = accounts[1]
		const addressHVRUR7Y = accounts[3]
		const boolNwrAxtK = await Token50X100FiwaGDU.increaseApproval.call(addressSumlCZP, uintRbMMXbt, {from: accounts[1]});
		const boolsRUzxJ = await Token50X100FiwaGDU.decreaseApproval.call(addressNzLxqgV, uintaQGChB, {from: accounts[2]});
//		const boolDB41tRr = await Token50X100FiwaGDU.safeLock.call(uintnSQO69A, uintXGPzNeV, {from: accounts[3]});
//		const boolPdhMUh = await Token50X100FiwaGDU.transferFrom.call(addressHVRUR7Y, addressOWqbWZ, uintW3ku7K, {from: accounts[2]});

		assert.equal(boolNwrAxtK, true)
		assert.equal(boolsRUzxJ, true)
		await expect(Token50X100FiwaGDU.safeLock.call(uintnSQO69A, uintXGPzNeV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const addressbBPZMoS = "0x0000000000000000000000000000000000000001"
		const uintw3GN9ML = BigInt("419")
		const addressc0bbDlD = "0x0000000000000000000000000000000000000000"
		const uintiI3sefu = BigInt("389")
		const uintegRumjn = BigInt("254")
		const uint256lc1IBY6 = await Token50X100FiwaGDU.balanceOf.call(addressbBPZMoS, {from: accounts[1]});
//		const boolLSvWNN3 = await Token50X100FiwaGDU.transfer.call(addressc0bbDlD, uintw3GN9ML, {from: accounts[4]});
//		const boolUb8XPEW = await Token50X100FiwaGDU.safeLock.call(uintegRumjn, uintiI3sefu, {from: accounts[3]});

		assert.equal(uint256lc1IBY6, BigInt("0"))
		await expect(Token50X100FiwaGDU.transfer.call(addressc0bbDlD, uintw3GN9ML, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FiwaGDU = await Token50X100.new({from: accounts[0]});
		const uintfu0c3WE = BigInt("419")
		const addresswONS3O = "0x00000000000000000000000000000000000000-1"
		const boolgKOc62Q = true
		const addressFzHGnyv = accounts[3]
		const uintpTGjoaz = BigInt("155")
		const uinti9jMUVa = BigInt("1732")
		const addressATdiKt = accounts[4]
		const uintRaT6jHR = BigInt("389")
		const uinta8nN61O = BigInt("254")
//		const boolLSvWNN3 = await Token50X100FiwaGDU.transfer.call(addresswONS3O, uintfu0c3WE, {from: accounts[4]});
//		await Token50X100FiwaGDU.setWhiteList.call(addressFzHGnyv, boolgKOc62Q, {from: accounts[2]});
//		await Token50X100FiwaGDU.release.call({from: accounts[1]});
//		const booljTytmA = await Token50X100FiwaGDU.setVesting.call(addressATdiKt, uinti9jMUVa, uintpTGjoaz, {from: accounts[4]});
//		const boolUb8XPEW = await Token50X100FiwaGDU.safeLock.call(uinta8nN61O, uintRaT6jHR, {from: accounts[3]});

		await expect(Token50X100FiwaGDU.transfer.call(addresswONS3O, uintfu0c3WE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})