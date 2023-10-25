const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractsBFy0NU = await HTDD_contract.new({from: accounts[4]});
		const uintFbCABv3 = BigInt("373")
		const addressyWAaxOM = accounts[2]
		const uintM5gaTFV = BigInt("1248")
		const addressvsG07IA = accounts[2]
		const boolPMhtLR1 = await HTDD_contractsBFy0NU.transfer.call(addressyWAaxOM, uintFbCABv3, {from: accounts[3]});
		const boolcIiWCjM = await HTDD_contractsBFy0NU.approve.call(addressvsG07IA, uintM5gaTFV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractsBFy0NU.transfer.call(addressyWAaxOM, uintFbCABv3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractEPf0LaU = await HTDD_contract.new({from: accounts[3]});
		const addressDxpnMl5 = accounts[2]
		const addressbehuSVc = accounts[0]
		const uintv8zzqBH = BigInt("1176")
		const addressLzuNSZO = accounts[5]
		const uintGrBdOii = BigInt("550")
		const addressAxwlGir = "0x0000000000000000000000000000000000000001"
		const uintJ0Dy92V = BigInt("1458")
		const addressWAeyu7R = accounts[4]
		const addresscbzEAkt = accounts[1]
		const addressiofXMMY = accounts[2]
		const addressXTmvVhS = accounts[0]
		const uintUItp3eA = BigInt("1965")
		const addressGHTsy28 = "0x0000000000000000000000000000000000000001"
		const address0EqzBL = accounts[2]
		const uint256lKndzrL = await HTDD_contractEPf0LaU.allowance.call(addressbehuSVc, addressDxpnMl5, {from: accounts[3]});
		const boolEmRX2Cm = await HTDD_contractEPf0LaU.approve.call(addressLzuNSZO, uintv8zzqBH, {from: accounts[1]});
		const boolkAmCv38 = await HTDD_contractEPf0LaU.approve.call(addressAxwlGir, uintGrBdOii, {from: accounts[3]});
		const boolzJJQ347 = await HTDD_contractEPf0LaU.transferFrom.call(addresscbzEAkt, addressWAeyu7R, uintJ0Dy92V, {from: accounts[4]});
		const uint256tHBMGMc = await HTDD_contractEPf0LaU.allowance.call(addressXTmvVhS, addressiofXMMY, {from: accounts[4]});
		const boolRHzGfST = await HTDD_contractEPf0LaU.transferFrom.call(address0EqzBL, addressGHTsy28, uintUItp3eA, {from: accounts[3]});

		assert.equal(boolEmRX2Cm, true)
		assert.equal(boolkAmCv38, true)
		assert.equal(uint256lKndzrL, BigInt("0"))
		await expect(HTDD_contractEPf0LaU.transferFrom.call(addresscbzEAkt, addressWAeyu7R, uintJ0Dy92V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractfEEiEkC = await HTDD_contract.new({from: accounts[2]});
		const uintCYEd4iL = BigInt("1147")
		const addressifHHppF = accounts[3]
		const addressC5EdZ5X = accounts[2]
		const addressKC3AzPe = accounts[5]
		const addresskeetOqh = accounts[0]
		const uinta0dXQHs = BigInt("1998")
		const addressMsDK4Oz = accounts[5]
		const addresssMnUUpJ = accounts[3]
		const boolWjRl4y1 = await HTDD_contractfEEiEkC.transferFrom.call(addressC5EdZ5X, addressifHHppF, uintCYEd4iL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yOC2GON = await HTDD_contractfEEiEkC.allowance.call(addresskeetOqh, addressKC3AzPe, {from: accounts[4]});
		const boollqeg6cG = await HTDD_contractfEEiEkC.transferFrom.call(addresssMnUUpJ, addressMsDK4Oz, uinta0dXQHs, {from: accounts[1]});

		await expect(HTDD_contractfEEiEkC.transferFrom.call(addressC5EdZ5X, addressifHHppF, uintCYEd4iL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractsBFy0NU = await HTDD_contract.new({from: accounts[4]});
		const uintjanOGs = BigInt("1127")
		const addressu5UEept = accounts[4]
		const uintKqn8NYt = BigInt("370")
		const addressNe9PZqb = accounts[3]
		const boolcG2msvv = await HTDD_contractsBFy0NU.transfer.call(addressu5UEept, uintjanOGs, {from: accounts[4]});
		const boolPMhtLR1 = await HTDD_contractsBFy0NU.transfer.call(addressNe9PZqb, uintKqn8NYt, {from: accounts[3]});

		assert.equal(boolcG2msvv, true)
		await expect(HTDD_contractsBFy0NU.transfer.call(addressNe9PZqb, uintKqn8NYt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracth6fYjZm = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressA3dGmbc = accounts[3]
		const addressYowBZqz = accounts[5]
		const addressNL1ov9 = accounts[0]
		const addressAOYgYlF = accounts[1]
		const uintysXLMN5 = BigInt("1086")
		const addressclI7Btx = accounts[1]
		const uint256jEpVMnb = await HTDD_contracth6fYjZm.allowance.call(addressYowBZqz, addressA3dGmbc, {from: accounts[5]});
		const uint256uCfWdMP = await HTDD_contracth6fYjZm.allowance.call(addressAOYgYlF, addressNL1ov9, {from: accounts[4]});
		const boolodWKX2s = await HTDD_contracth6fYjZm.approve.call(addressclI7Btx, uintysXLMN5, {from: accounts[1]});
	});
})