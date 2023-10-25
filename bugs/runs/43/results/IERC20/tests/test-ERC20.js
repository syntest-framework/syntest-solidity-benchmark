const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractwmvYFCY = await ERC20.new({from: accounts[2]});
		const valueG7bIhW3 = BigInt("1632")
		const tosX3suVX = accounts[3]
		const valueJlQ0Lya = BigInt("251")
		const spenderoqDO30c = accounts[2]
		const ownerqxXGwNS = accounts[4]
		const ownerHUzvztP = accounts[4]
		const nullWUl8d25 = await contractwmvYFCY.transfer.call(tosX3suVX, valueG7bIhW3, {from: accounts[4]});
		const nulljTAehk0 = await contractwmvYFCY.totalSupply.call({from: accounts[5]});
		const nullSjoYzys = await contractwmvYFCY.approve.call(spenderoqDO30c, valueJlQ0Lya, {from: accounts[3]});
		const nullU4EKTEz = await contractwmvYFCY.balanceOf.call(ownerqxXGwNS, {from: accounts[1]});
		const nullECisp6s = await contractwmvYFCY.balanceOf.call(ownerHUzvztP, {from: accounts[4]});

		await expect(contractwmvYFCY.transfer.call(tosX3suVX, valueG7bIhW3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractiF7xyFV = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownervnpIm4F = accounts[1]
		const valuekB2gz0N = BigInt("1255")
		const toEQf4kuv = accounts[2]
		const fromfyD6AsA = accounts[2]
		const valuex1VKCzU = BigInt("2015")
		const spenderWvbQq6u = accounts[2]
		const nullBQBo6DZ = await contractiF7xyFV.balanceOf.call(ownervnpIm4F, {from: accounts[3]});
		const nullZrNqKyy = await contractiF7xyFV.transferFrom.call(fromfyD6AsA, toEQf4kuv, valuekB2gz0N, {from: "0x0000000000000000000000000000000000000001"});
		const nullsz8TNb1 = await contractiF7xyFV.approve.call(spenderWvbQq6u, valuex1VKCzU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC20', async () => {
		const contractlZJHEB = await ERC20.new({from: accounts[5]});
		const valueZaDiAS3 = BigInt("1008")
		const spenderQpiifaD = accounts[1]
		const spenderluVBZH3 = accounts[3]
		const ownerkYTSUhg = accounts[4]
		const addedValuemsTkR1b = BigInt("372")
		const spender6JoxBl = accounts[1]
		const valuezkekhXi = BigInt("99")
		const spenderqBMev5r = accounts[2]
		const nullCZtwEHN = await contractlZJHEB.approve.call(spenderQpiifaD, valueZaDiAS3, {from: accounts[2]});
		const nullK9j8tqG = await contractlZJHEB.allowance.call(ownerkYTSUhg, spenderluVBZH3, {from: "0x0000000000000000000000000000000000000001"});
		const nullW30c60v = await contractlZJHEB.increaseAllowance.call(spender6JoxBl, addedValuemsTkR1b, {from: accounts[5]});
		const nullnlNT37a = await contractlZJHEB.approve.call(spenderqBMev5r, valuezkekhXi, {from: accounts[2]});

		assert.equal(nullCZtwEHN, true)
		assert.equal(nullK9j8tqG, 0)
		assert.equal(nullW30c60v, true)
		assert.equal(nullnlNT37a, true)
	});

	it('test for ERC20', async () => {
		const contractaVY9J0u = await ERC20.new({from: accounts[1]});
		const valueitUPnXi = BigInt("1063")
		const spenderv1RzbfC = accounts[0]
		const addedValueZ6HwVb = BigInt("348")
		const spenderRHB41Sw = accounts[1]
		const nullsozaPYw = await contractaVY9J0u.approve.call(spenderv1RzbfC, valueitUPnXi, {from: accounts[3]});
		const nullRPyBnPx = await contractaVY9J0u.increaseAllowance.call(spenderRHB41Sw, addedValueZ6HwVb, {from: accounts[1]});
		const nullwCqfY6D = await contractaVY9J0u.totalSupply.call({from: accounts[0]});

		assert.equal(nullRPyBnPx, true)
		assert.equal(nullsozaPYw, true)
		assert.equal(nullwCqfY6D, 0)
	});

	it('test for ERC20', async () => {
		const contractyTdzt1l = await ERC20.new({from: accounts[0]});
		const spenderAAndb6k = accounts[4]
		const owner2pddUb = accounts[4]
		const valuevbFF3YJ = BigInt("245")
		const spenderjUlhse = accounts[0]
		const valueAUd8jg = BigInt("696")
		const toRg1eARr = accounts[4]
		const fromP7G8qg = accounts[3]
		const spenderOEPUDjt = accounts[1]
		const ownerVTBlN2d = accounts[1]
		const nullmX4v1J = await contractyTdzt1l.allowance.call(owner2pddUb, spenderAAndb6k, {from: accounts[0]});
		const nullbEa0bqs = await contractyTdzt1l.approve.call(spenderjUlhse, valuevbFF3YJ, {from: accounts[4]});
		const nullQPdaAAT = await contractyTdzt1l.transferFrom.call(fromP7G8qg, toRg1eARr, valueAUd8jg, {from: "0x0000000000000000000000000000000000000001"});
		const nullxPWWBL = await contractyTdzt1l.allowance.call(ownerVTBlN2d, spenderOEPUDjt, {from: accounts[4]});
		const nulllZYCJ75 = await contractyTdzt1l.totalSupply.call({from: accounts[1]});

		assert.equal(nullbEa0bqs, true)
		assert.equal(nullmX4v1J, 0)
		await expect(contractyTdzt1l.transferFrom.call(fromP7G8qg, toRg1eARr, valueAUd8jg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmfHWLR = await ERC20.new({from: accounts[3]});
		const owneryfsnjD = accounts[0]
		const addedValueKo7g69w = BigInt("1441")
		const spendersw1qhyw = accounts[5]
		const nullur6ekBg = await contractmfHWLR.balanceOf.call(owneryfsnjD, {from: accounts[1]});
		const nullQiDWAnC = await contractmfHWLR.increaseAllowance.call(spendersw1qhyw, addedValueKo7g69w, {from: accounts[4]});

		assert.equal(nullQiDWAnC, true)
		assert.equal(nullur6ekBg, 0)
	});

	it('test for ERC20', async () => {
		const contractA3TTyR = await ERC20.new({from: accounts[1]});
		const subtractedValueexoiwOU = BigInt("1630")
		const spenderLt2jiaM = accounts[5]
		const addedValuew4qXHPe = BigInt("1707")
		const spenderRZCCVIW = accounts[1]
		const valueAon27XF = BigInt("869")
		const toIs1PVdE = accounts[2]
		const fromaHcvVoy = accounts[1]
		const nullmPLEEgf = await contractA3TTyR.decreaseAllowance.call(spenderLt2jiaM, subtractedValueexoiwOU, {from: accounts[2]});
		const nulllrJm9Fc = await contractA3TTyR.increaseAllowance.call(spenderRZCCVIW, addedValuew4qXHPe, {from: accounts[3]});
		const nullwH2YTr1 = await contractA3TTyR.transferFrom.call(fromaHcvVoy, toIs1PVdE, valueAon27XF, {from: accounts[0]});

		await expect(contractA3TTyR.decreaseAllowance.call(spenderLt2jiaM, subtractedValueexoiwOU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})