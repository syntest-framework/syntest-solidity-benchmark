const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addresssIMuQBc = accounts[0]
		const LayerxST3zmzr = await Layerx.new(addresssIMuQBc, {from: accounts[4]});
		const addressDNLCMbe = accounts[2]
		const addresslMwXr6H = accounts[2]
		const addressaJVWWzL = accounts[5]
		const addressuy8itLq = await LayerxST3zmzr.setNewStakeCreator.call(addressDNLCMbe, {from: accounts[3]});
		const uintuFpnO21 = await LayerxST3zmzr.allowance.call(addressaJVWWzL, addresslMwXr6H, {from: accounts[0]});
		const uintquiHG25 = await LayerxST3zmzr.totalSupply.call({from: accounts[4]});
		await LayerxST3zmzr.paused.call({from: accounts[0]});

		await expect(LayerxST3zmzr.setNewStakeCreator.call(addressDNLCMbe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressE3gVe2O = accounts[4]
		const Layerxlv0OoJG = await Layerx.new(addressE3gVe2O, {from: accounts[0]});
		const uintZQS6aMm = BigInt("36")
		const boolM8iD6NW = false
		const addressX7NdaD6 = accounts[1]
		const addresshfbMlv = accounts[2]
		const uintaFWX84u = BigInt("979")
		const addressBbFhgCi = accounts[0]
		const uint0SqH0n = await Layerxlv0OoJG.exist.call(uintZQS6aMm, {from: accounts[1]});
		const boolrfezq1S = await Layerxlv0OoJG.setIsPaused.call(boolM8iD6NW, {from: accounts[0]});
		const uintMIuyg4I = await Layerxlv0OoJG.allowance.call(addresshfbMlv, addressX7NdaD6, {from: accounts[2]});
		const boolJP0W8cd = await Layerxlv0OoJG.transfer.call(addressBbFhgCi, uintaFWX84u, {from: accounts[3]});

		await expect(Layerxlv0OoJG.exist.call(uintZQS6aMm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBjvBclN = accounts[1]
		const Layerxj3n3DdP = await Layerx.new(addressBjvBclN, {from: accounts[0]});
		const addressxtmIVrh = accounts[1]
		const addressEuzqShz = accounts[3]
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[0]});
		await Layerxj3n3DdP.onlyOwner.call({from: accounts[0]});
		const uintCJsrufu = await Layerxj3n3DdP.allowance.call(addressEuzqShz, addressxtmIVrh, {from: accounts[0]});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[4]});

		await expect(Layerxj3n3DdP.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyDU86H7 = "0x0000000000000000000000000000000000000001"
		const LayerxYMHIkQQ = await Layerx.new(addressyDU86H7, {from: accounts[1]});
		const uintrBtLae = await LayerxYMHIkQQ.getStakesNum.call({from: accounts[3]});
		await LayerxYMHIkQQ.paused.call({from: accounts[1]});
		const uintJa8LxNd = await LayerxYMHIkQQ.getStakesNum.call({from: accounts[0]});
		await LayerxYMHIkQQ.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintrBtLae, BigInt("1"))
		await expect(LayerxYMHIkQQ.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressuUJEz1U = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressuUJEz1U, {from: accounts[3]});
		const uintxeLz1dE = BigInt("26")
		const addressgL4A73A = accounts[0]
		const uintR3Q60CO = await LayerxrwScnGK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxrwScnGK.unlock.call({from: accounts[2]});
		const boolN1jto3e = await LayerxrwScnGK.approve.call(addressgL4A73A, uintxeLz1dE, {from: accounts[0]});

		assert.equal(uintR3Q60CO, BigInt("40000000000000000000000"))
		await expect(LayerxrwScnGK.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZJfXej4 = accounts[4]
		const Layerxu8p2eRI = await Layerx.new(addressZJfXej4, {from: accounts[3]});
		const uintcVOq4xx = BigInt("1937")
		const addressOJz5Kr6 = accounts[0]
		const addressj7AjT5 = accounts[0]
		const bytebekrE2X = "0x151707040f01"
		const uintg0y6cWE = BigInt("614")
		const addressm3SLzae = accounts[4]
		const uintBaHY5rJ = BigInt("585")
		const addressx1oT92K = accounts[1]
		const addressl5EwsXN = "0x0000000000000000000000000000000000000001"
		const boollicWpOm = await Layerxu8p2eRI.transfer.call(addressOJz5Kr6, uintcVOq4xx, {from: accounts[4]});
		await Layerxu8p2eRI.paused.call({from: accounts[4]});
		const uintiK22XJ8 = await Layerxu8p2eRI.balanceOf.call(addressj7AjT5, {from: accounts[4]});
		const boolVfijw4T = await Layerxu8p2eRI.approveAndCall.call(addressm3SLzae, uintg0y6cWE, bytebekrE2X, {from: accounts[1]});
		await Layerxu8p2eRI.paused.call({from: accounts[3]});
		const boolCRl2Ct2 = await Layerxu8p2eRI.transferFrom.call(addressl5EwsXN, addressx1oT92K, uintBaHY5rJ, {from: accounts[4]});

		assert.equal(boollicWpOm, true)
		await expect(Layerxu8p2eRI.paused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyqlnWVP = accounts[1]
		const LayerxXbzMSQA = await Layerx.new(addressyqlnWVP, {from: "0x0000000000000000000000000000000000000001"});
		const uintqlCg7ID = BigInt("1359")
		const addressinqbhzC = accounts[1]
		const addressPLwP4Jk = accounts[1]
		const uintSBUKkej = BigInt("1559")
		const addressfeYjtKh = accounts[4]
		const boolmwD4SUA = await LayerxXbzMSQA.transferFrom.call(addressPLwP4Jk, addressinqbhzC, uintqlCg7ID, {from: accounts[4]});
		const uintRcRLwkA = await LayerxXbzMSQA.withdraw.call(uintSBUKkej, {from: accounts[0]});
		await LayerxXbzMSQA.addStakePayment.call({from: accounts[4]});
		await LayerxXbzMSQA.paused.call({from: accounts[0]});
		const addressm8O2DkP = await LayerxXbzMSQA.setNewStakeCreator.call(addressfeYjtKh, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressohGhp3B = accounts[1]
		const Layerxj3n3DdP = await Layerx.new(addressohGhp3B, {from: accounts[0]});
		const uint9eo6pJ = BigInt("1662")
		const addressgTszQpW = accounts[1]
		const addressIU6ylm8 = accounts[3]
		const uintOWE6To = await Layerxj3n3DdP.withdraw.call(uint9eo6pJ, {from: "0x0000000000000000000000000000000000000001"});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[0]});
		await Layerxj3n3DdP.onlyOwner.call({from: accounts[0]});
		const uintCJsrufu = await Layerxj3n3DdP.allowance.call(addressIU6ylm8, addressgTszQpW, {from: accounts[0]});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[4]});

		await expect(Layerxj3n3DdP.withdraw.call(uint9eo6pJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNHwnnG1 = accounts[0]
		const LayerxST3zmzr = await Layerx.new(addressNHwnnG1, {from: accounts[4]});
		const addressXNbUpE3 = accounts[2]
		const addressJ7emEsz = accounts[5]
		const boolJuTWhxT = true
		const uintuFpnO21 = await LayerxST3zmzr.allowance.call(addressJ7emEsz, addressXNbUpE3, {from: accounts[0]});
		const uintquiHG25 = await LayerxST3zmzr.totalSupply.call({from: accounts[4]});
		await LayerxST3zmzr.paused.call({from: accounts[0]});
		const boolgwGMEyx = await LayerxST3zmzr.setIsPaused.call(boolJuTWhxT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintquiHG25, BigInt("40000000000000000000000"))
		assert.equal(uintuFpnO21, BigInt("0"))
		await expect(LayerxST3zmzr.paused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQdGPsib = accounts[4]
		const LayerxtWVhJcZ = await Layerx.new(addressQdGPsib, {from: accounts[4]});
		const uintHYTBc0N = BigInt("1500")
		const addressZRbxQ4k = accounts[4]
		const addressM7tgLhT = accounts[4]
		const uintgEjEi3T = BigInt("1879")
		const uintCtT7OrJ = BigInt("196")
		const uintgxYe75E = BigInt("1141")
		const addressGjhmUb = accounts[5]
		const addressXkrryWe = accounts[5]
		const boolbyQbs5m = await LayerxtWVhJcZ.transfer.call(addressZRbxQ4k, uintHYTBc0N, {from: accounts[2]});
		await LayerxtWVhJcZ.paused.call({from: accounts[2]});
		const uintGSkJBIn = await LayerxtWVhJcZ.balanceOf.call(addressM7tgLhT, {from: accounts[2]});
		const uint256l2pQInD = await LayerxtWVhJcZ.burn.call(uintgEjEi3T, {from: accounts[3]});
		const uintExMm42P = await LayerxtWVhJcZ.withdraw.call(uintCtT7OrJ, {from: accounts[2]});
		const uint256eXBvWxO = await LayerxtWVhJcZ.burn.call(uintgxYe75E, {from: accounts[2]});
		const uintd1dlQ89 = await LayerxtWVhJcZ.allowance.call(addressXkrryWe, addressGjhmUb, {from: accounts[1]});

		await expect(LayerxtWVhJcZ.transfer.call(addressZRbxQ4k, uintHYTBc0N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXSBRh8o = accounts[4]
		const LayerxtWVhJcZ = await Layerx.new(addressXSBRh8o, {from: accounts[4]});
		const addressHU1S7Ai = accounts[0]
		const uintfLvI3gg = BigInt("1487")
		const addresssVF4wWj = accounts[5]
		const addressIqxPp6Z = "0x0000000000000000000000000000000000000001"
		const address3xd9b1 = accounts[4]
		const uintM0pA0F2 = BigInt("1898")
		const uintIe1r7Fc = BigInt("1141")
		const addressM1z672A = accounts[1]
		const addressZ1YKfmS = accounts[5]
		const uintdOq7jV8 = await LayerxtWVhJcZ.balanceOf.call(addressHU1S7Ai, {from: accounts[1]});
		await LayerxtWVhJcZ.paused.call({from: accounts[2]});
		const boolq0z0pT = await LayerxtWVhJcZ.transferFrom.call(addressIqxPp6Z, addresssVF4wWj, uintfLvI3gg, {from: accounts[3]});
		const uintGSkJBIn = await LayerxtWVhJcZ.balanceOf.call(address3xd9b1, {from: accounts[2]});
		const uint256l2pQInD = await LayerxtWVhJcZ.burn.call(uintM0pA0F2, {from: accounts[3]});
		const uint256eXBvWxO = await LayerxtWVhJcZ.burn.call(uintIe1r7Fc, {from: accounts[2]});
		const uintd1dlQ89 = await LayerxtWVhJcZ.allowance.call(addressZ1YKfmS, addressM1z672A, {from: accounts[1]});

		assert.equal(uintdOq7jV8, BigInt("0"))
		await expect(LayerxtWVhJcZ.paused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspgyT215 = accounts[0]
		const LayerxQcna4pw = await Layerx.new(addresspgyT215, {from: accounts[4]});
		const bytexJT4w5i = "0x1b1903010e0d17020f"
		const uintgeWfs5r = BigInt("1338")
		const addressdUhve4s = accounts[1]
		const uintCmrubiB = BigInt("1182")
		const addressYGrQLPX = accounts[4]
		const addresslCf86rs = accounts[1]
		const uintHFI7zy = BigInt("1781")
		const boolZtsmtQH = await LayerxQcna4pw.approveAndCall.call(addressdUhve4s, uintgeWfs5r, bytexJT4w5i, {from: accounts[3]});
		const boolVySaZuZ = await LayerxQcna4pw.transferFrom.call(addresslCf86rs, addressYGrQLPX, uintCmrubiB, {from: accounts[2]});
		const uintSo9gFnu = await LayerxQcna4pw.lock.call(uintHFI7zy, {from: accounts[4]});

		await expect(LayerxQcna4pw.approveAndCall.call(addressdUhve4s, uintgeWfs5r, bytexJT4w5i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTh8rXnW = accounts[4]
		const Layerxk5UQww = await Layerx.new(addressTh8rXnW, {from: accounts[1]});
		const addressCwtlJui = accounts[2]
		const addressZcJvQdV = accounts[4]
		const uintOU3R49M = BigInt("1837")
		const addressCX1024i = accounts[2]
		const uintlISM9Kp = await Layerxk5UQww.balanceOf.call(addressCwtlJui, {from: accounts[3]});
		const uintVjV66y = await Layerxk5UQww.balanceOf.call(addressZcJvQdV, {from: accounts[4]});
		await Layerxk5UQww.f.call({from: accounts[2]});
		const boolxKNol0B = await Layerxk5UQww.transfer.call(addressCX1024i, uintOU3R49M, {from: accounts[2]});
		await Layerxk5UQww.f.call({from: accounts[3]});

		assert.equal(uintVjV66y, BigInt("40000000000000000000000"))
		assert.equal(uintlISM9Kp, BigInt("0"))
		await expect(Layerxk5UQww.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressetfise0 = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressetfise0, {from: accounts[3]});
		const uintnHAgQW = BigInt("26")
		const addressziXkHKP = accounts[1]
		const uintR3Q60CO = await LayerxrwScnGK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolN1jto3e = await LayerxrwScnGK.approve.call(addressziXkHKP, uintnHAgQW, {from: accounts[0]});

		assert.equal(boolN1jto3e, true)
		assert.equal(uintR3Q60CO, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressUmisxwb = accounts[1]
		const Layerxj3n3DdP = await Layerx.new(addressUmisxwb, {from: accounts[0]});
		const addressM00YdbT = "0x0000000000000000000000000000000000000001"
		const uintvkR8aIR = BigInt("1871")
		const addresseeHvDyQ = accounts[1]
		const addressKqb6R9q = accounts[3]
		const addressw95BwBw = await Layerxj3n3DdP.setNewStakeCreator.call(addressM00YdbT, {from: accounts[1]});
		const uint256OIFEwoi = await Layerxj3n3DdP.burn.call(uintvkR8aIR, {from: "0x0000000000000000000000000000000000000001"});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[0]});
		const uintof6wIDd = await Layerxj3n3DdP.getStakesNum.call({from: accounts[2]});
		const uintCJsrufu = await Layerxj3n3DdP.allowance.call(addressKqb6R9q, addresseeHvDyQ, {from: accounts[0]});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[4]});

		await expect(Layerxj3n3DdP.burn.call(uintvkR8aIR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressB9oVmHd = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressB9oVmHd, {from: accounts[3]});
		const uint63PH9n = BigInt("1763")
		const addressYIq5001 = accounts[4]
		const addressGNMRm9n = accounts[1]
		const uint4fY0Eh = BigInt("1326")
		const boolnFtaLV = false
		const uintC2j1CKJ = BigInt("26")
		const addressUFrHvnm = accounts[1]
		const uintR3Q60CO = await LayerxrwScnGK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfyZuRA = await LayerxrwScnGK.transferFrom.call(addressGNMRm9n, addressYIq5001, uint63PH9n, {from: accounts[5]});
		const uintv8JE7I9 = await LayerxrwScnGK.exist.call(uint4fY0Eh, {from: accounts[0]});
		await LayerxrwScnGK.unlock.call({from: accounts[2]});
		const booljfnlWt = await LayerxrwScnGK.setIsPaused.call(boolnFtaLV, {from: accounts[4]});
		const boolN1jto3e = await LayerxrwScnGK.approve.call(addressUFrHvnm, uintC2j1CKJ, {from: accounts[0]});

		assert.equal(uintR3Q60CO, BigInt("40000000000000000000000"))
		await expect(LayerxrwScnGK.transferFrom.call(addressGNMRm9n, addressYIq5001, uint63PH9n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTTVTXz = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressTTVTXz, {from: accounts[3]});
		const uintNJdwMmH = BigInt("1100")
		const uintNTuasvW = BigInt("1698")
		const addressqGW10Q = accounts[0]
		const uintR3Q60CO = await LayerxrwScnGK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintG3KE4Ch = await LayerxrwScnGK.lock.call(uintNJdwMmH, {from: accounts[4]});
		await LayerxrwScnGK.unlock.call({from: accounts[2]});
		const boolN1jto3e = await LayerxrwScnGK.approve.call(addressqGW10Q, uintNTuasvW, {from: accounts[0]});

		assert.equal(uintR3Q60CO, BigInt("40000000000000000000000"))
		await expect(LayerxrwScnGK.lock.call(uintNJdwMmH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEk002Dx = accounts[1]
		const Layerxj3n3DdP = await Layerx.new(addressEk002Dx, {from: accounts[0]});
		const addressBOVDrmm = "0x0000000000000000000000000000000000000001"
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[1]});
		await Layerxj3n3DdP.addStakePayment.call({from: accounts[0]});
		const addresshWUSqD9 = await Layerxj3n3DdP.transferOwnership.call(addressBOVDrmm, {from: accounts[4]});
		const uintqgQunvo = await Layerxj3n3DdP.totalSupply.call({from: accounts[2]});
		await Layerxj3n3DdP.paused.call({from: accounts[3]});
		const uintgfQ4Rge = await Layerxj3n3DdP.totalSupply.call({from: accounts[3]});

		await expect(Layerxj3n3DdP.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBFDDgBu = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressBFDDgBu, {from: accounts[3]});
		const uintM6wlTVM = BigInt("627")
		const uint3VtQcH = BigInt("451")
		const addresscKEhLbH = accounts[3]
		const addressU9mQjZX = accounts[3]
		const uint256yeAtEVy = await LayerxrwScnGK.burn.call(uintM6wlTVM, {from: accounts[1]});
		const boolosCpks1 = await LayerxrwScnGK.transferFrom.call(addressU9mQjZX, addresscKEhLbH, uint3VtQcH, {from: accounts[4]});
		await LayerxrwScnGK.addStakePayment.call({from: accounts[1]});
		await LayerxrwScnGK.unlock.call({from: accounts[2]});

		await expect(LayerxrwScnGK.transferFrom.call(addressU9mQjZX, addresscKEhLbH, uint3VtQcH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxqFWM3v = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressxqFWM3v, {from: accounts[3]});
		const booldmC4uBt = true
		const boolPDN5Om = await LayerxrwScnGK.setIsPaused.call(booldmC4uBt, {from: accounts[1]});
		await LayerxrwScnGK.addStakePayment.call({from: accounts[1]});
		await LayerxrwScnGK.unlock.call({from: accounts[1]});
		await LayerxrwScnGK.unlock.call({from: accounts[2]});

		await expect(LayerxrwScnGK.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrLeP8FA = accounts[1]
		const LayerxrwScnGK = await Layerx.new(addressrLeP8FA, {from: accounts[3]});
		const addressGKOdbJO = accounts[0]
		const addressVTzsBRn = accounts[4]
		const uintjMIZ1CK = BigInt("19")
		const uintamDaY2f = BigInt("2011")
		const bytepzwV4ix = "0x1419120116"
		const uintt8glVCp = BigInt("350")
		const addressonXz8AL = accounts[1]
		await LayerxrwScnGK.addStakePayment.call({from: accounts[1]});
		const addressyymYeze = await LayerxrwScnGK.setNewStakeCreator.call(addressGKOdbJO, {from: accounts[1]});
		const addresspjsI018 = await LayerxrwScnGK.transferOwnership.call(addressVTzsBRn, {from: accounts[1]});
		const uintEFC0EUA = await LayerxrwScnGK.lock.call(uintjMIZ1CK, {from: accounts[5]});
		const uintM6HZwM9 = await LayerxrwScnGK.withdraw.call(uintamDaY2f, {from: accounts[4]});
		const boolC9NBHto = await LayerxrwScnGK.approveAndCall.call(addressonXz8AL, uintt8glVCp, bytepzwV4ix, {from: accounts[1]});

		await expect(LayerxrwScnGK.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})