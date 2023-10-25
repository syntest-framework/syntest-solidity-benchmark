const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractMefa7rn = await ERC20.new({from: accounts[2]});
		const addedValueQ6dpTZO = BigInt("1239")
		const spendergWZJT2g = "0x0000000000000000000000000000000000000001"
		const ownersAold4H = accounts[1]
		const nullsgLHNMf = await contractMefa7rn.increaseAllowance.call(spendergWZJT2g, addedValueQ6dpTZO, {from: accounts[4]});
		const nullVA7vIPc = await contractMefa7rn.balanceOf.call(ownersAold4H, {from: accounts[1]});

		assert.equal(nullVA7vIPc, 0)
		assert.equal(nullsgLHNMf, true)
	});

	it('test for ERC20', async () => {
		const contractVp2b3Il = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueNDeJ4ss = BigInt("38")
		const spenderaxlFOT = accounts[3]
		const valueGrMz53u = BigInt("518")
		const spenderDg7ycc1 = accounts[3]
		const spenderWkh3gPW = accounts[3]
		const ownerdVf8by7 = accounts[5]
		const nullfM7Jl4L = await contractVp2b3Il.approve.call(spenderaxlFOT, valueNDeJ4ss, {from: accounts[3]});
		const nullhFHmmj0 = await contractVp2b3Il.totalSupply.call({from: accounts[0]});
		const nullg4zL5a5 = await contractVp2b3Il.approve.call(spenderDg7ycc1, valueGrMz53u, {from: accounts[3]});
		const nullvmSSiE3 = await contractVp2b3Il.allowance.call(ownerdVf8by7, spenderWkh3gPW, {from: accounts[2]});
		const nullXjRBYe = await contractVp2b3Il.totalSupply.call({from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractjmiu1Bl = await ERC20.new({from: accounts[4]});
		const addedValuesdbsJc = BigInt("1109")
		const spenderixjtZyg = accounts[1]
		const ownerRzsh08H = accounts[3]
		const valuebEEnt0a = BigInt("248")
		const toCvZSctr = "0x0000000000000000000000000000000000000001"
		const valueeFgDWXR = BigInt("1405")
		const toK1232P = "0x0000000000000000000000000000000000000001"
		const fromPbcQwkf = accounts[3]
		const addedValueiIJDLlV = BigInt("715")
		const spenderyboXKQP = accounts[2]
		const addedValuehEU1GPe = BigInt("1783")
		const spenderUGfe9QQ = accounts[0]
		const nullmAid9Nb = await contractjmiu1Bl.increaseAllowance.call(spenderixjtZyg, addedValuesdbsJc, {from: accounts[0]});
		const nullSI6432V = await contractjmiu1Bl.balanceOf.call(ownerRzsh08H, {from: accounts[4]});
		const nullhAheJC = await contractjmiu1Bl.transfer.call(toCvZSctr, valuebEEnt0a, {from: accounts[1]});
		const nullCMwWvUz = await contractjmiu1Bl.transferFrom.call(fromPbcQwkf, toK1232P, valueeFgDWXR, {from: accounts[2]});
		const nullMIe74yt = await contractjmiu1Bl.increaseAllowance.call(spenderyboXKQP, addedValueiIJDLlV, {from: "0x0000000000000000000000000000000000000001"});
		const nullHTwfbH = await contractjmiu1Bl.increaseAllowance.call(spenderUGfe9QQ, addedValuehEU1GPe, {from: accounts[5]});

		assert.equal(nullSI6432V, 0)
		assert.equal(nullmAid9Nb, true)
		await expect(contractjmiu1Bl.transfer.call(toCvZSctr, valuebEEnt0a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgvgbumx = await ERC20.new({from: accounts[1]});
		const spenderIFToXD = accounts[3]
		const ownerAsiWN8 = "0x0000000000000000000000000000000000000001"
		const ownerWCke7Xe = accounts[2]
		const spendermTULCd9 = accounts[0]
		const ownertIhXZIN = accounts[1]
		const valueR65op7p = BigInt("1156")
		const tojhVXnwb = accounts[1]
		const null0p6LXG = await contractgvgbumx.allowance.call(ownerAsiWN8, spenderIFToXD, {from: accounts[3]});
		const nullozD3xDe = await contractgvgbumx.balanceOf.call(ownerWCke7Xe, {from: accounts[5]});
		const nullv2eFnIi = await contractgvgbumx.allowance.call(ownertIhXZIN, spendermTULCd9, {from: accounts[5]});
		const nullQhgr9nu = await contractgvgbumx.transfer.call(tojhVXnwb, valueR65op7p, {from: accounts[5]});

		assert.equal(null0p6LXG, 0)
		assert.equal(nullozD3xDe, 0)
		assert.equal(nullv2eFnIi, 0)
		await expect(contractgvgbumx.transfer.call(tojhVXnwb, valueR65op7p, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractX8EaeaT = await ERC20.new({from: accounts[2]});
		const valueWy4KBnB = BigInt("1911")
		const spenderCKXRaEx = accounts[2]
		const valueVo0gyzD = BigInt("84")
		const spenderAtEQFaw = accounts[3]
		const nulli7nUsQy = await contractX8EaeaT.approve.call(spenderCKXRaEx, valueWy4KBnB, {from: accounts[3]});
		const nullGGrFtRD = await contractX8EaeaT.approve.call(spenderAtEQFaw, valueVo0gyzD, {from: accounts[1]});

		assert.equal(nullGGrFtRD, true)
		assert.equal(nulli7nUsQy, true)
	});

	it('test for ERC20', async () => {
		const contractHkRb04d = await ERC20.new({from: accounts[2]});
		const ownerSr2wiM = accounts[1]
		const owneri1jUCE = accounts[4]
		const subtractedValueTDRP7Er = BigInt("1886")
		const spenderNsV5Iev = accounts[0]
		const values2baKQe = BigInt("851")
		const spenderpiLQYyl = accounts[2]
		const nulljGtghrI = await contractHkRb04d.balanceOf.call(ownerSr2wiM, {from: accounts[1]});
		const nullOb3EiKQ = await contractHkRb04d.balanceOf.call(owneri1jUCE, {from: accounts[4]});
		const nullLB5dPJu = await contractHkRb04d.decreaseAllowance.call(spenderNsV5Iev, subtractedValueTDRP7Er, {from: accounts[3]});
		const nulll7bmufn = await contractHkRb04d.approve.call(spenderpiLQYyl, values2baKQe, {from: accounts[5]});

		assert.equal(nullOb3EiKQ, 0)
		assert.equal(nulljGtghrI, 0)
		await expect(contractHkRb04d.decreaseAllowance.call(spenderNsV5Iev, subtractedValueTDRP7Er, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractYD7lsYn = await ERC20.new({from: accounts[0]});
		const spenderlbMyHa0 = accounts[2]
		const ownerpc9LAz1 = accounts[2]
		const valueXEAtxoU = BigInt("1392")
		const spendergrSHfP = accounts[0]
		const valueQiV8UI7 = BigInt("947")
		const toKBEIyCg = "0x0000000000000000000000000000000000000001"
		const fromnwS4lS9 = accounts[5]
		const valueZKxwFE6 = BigInt("1934")
		const toBDKA19p = accounts[0]
		const valueda5kDtf = BigInt("389")
		const toxcF8pjc = accounts[5]
		const fromLQBBNBG = accounts[4]
		const nullb9uEUQz = await contractYD7lsYn.allowance.call(ownerpc9LAz1, spenderlbMyHa0, {from: accounts[0]});
		const nullsVe3ffx = await contractYD7lsYn.approve.call(spendergrSHfP, valueXEAtxoU, {from: accounts[2]});
		const nulllHyUccX = await contractYD7lsYn.transferFrom.call(fromnwS4lS9, toKBEIyCg, valueQiV8UI7, {from: accounts[0]});
		const nullrfqW3rO = await contractYD7lsYn.transfer.call(toBDKA19p, valueZKxwFE6, {from: "0x0000000000000000000000000000000000000001"});
		const nullOfU1c93 = await contractYD7lsYn.transferFrom.call(fromLQBBNBG, toxcF8pjc, valueda5kDtf, {from: accounts[1]});
		const nulld3UZ7X7 = await contractYD7lsYn.totalSupply.call({from: accounts[1]});

		assert.equal(nullb9uEUQz, 0)
		assert.equal(nullsVe3ffx, true)
		await expect(contractYD7lsYn.transferFrom.call(fromnwS4lS9, toKBEIyCg, valueQiV8UI7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractksbEwx5 = await ERC20.new({from: accounts[2]});
		const addedValueDNXEu9t = BigInt("1268")
		const spenderDZmRRF = "0x0000000000000000000000000000000000000002"
		const nullTuOkJVc = await contractksbEwx5.increaseAllowance.call(spenderDZmRRF, addedValueDNXEu9t, {from: accounts[4]});
		const nullMYmcGw = await contractksbEwx5.totalSupply.call({from: accounts[5]});

		assert.equal(nullMYmcGw, 0)
		assert.equal(nullTuOkJVc, true)
	});
})