const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingyWPFEjw = await EqFinanceStaking.new({from: accounts[4]});
		const addresslytEdFS = accounts[5]
		const uintnR12dFo = BigInt("1681")
		const addressXzZG8My = "0x0000000000000000000000000000000000000001"
		const addresspi6yJfY = accounts[4]
		const uintmrMS98O = await EqFinanceStakingyWPFEjw.getPendingDivs.call(addresslytEdFS, {from: accounts[0]});
//		const uint8NzTL6 = await EqFinanceStakingyWPFEjw.withdraw.call(uintnR12dFo, {from: accounts[4]});
//		const addressatYi3I0 = await EqFinanceStakingyWPFEjw.transferOwnership.call(addressXzZG8My, {from: accounts[0]});
//		const addresszKysyNI = await EqFinanceStakingyWPFEjw.transferOwnership.call(addresspi6yJfY, {from: accounts[0]});

		assert.equal(uintmrMS98O, BigInt("0"))
		await expect(EqFinanceStakingyWPFEjw.withdraw.call(uintnR12dFo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingHZmo7B8 = await EqFinanceStaking.new({from: accounts[1]});
		const uintYbfZ3j3 = BigInt("875")
		const uintaJsdZb = BigInt("1473")
		const addressM9oQaZG = accounts[0]
		const addressP0cD1fv = accounts[3]
//		await EqFinanceStakingHZmo7B8.onlyOwner.call({from: accounts[0]});
//		const uintuzVRDoY = await EqFinanceStakingHZmo7B8.deposit.call(uintYbfZ3j3, {from: accounts[3]});
//		const addressYGOs5nB = await EqFinanceStakingHZmo7B8.transferAnyERC20Tokens.call(addressP0cD1fv, addressM9oQaZG, uintaJsdZb, {from: accounts[3]});

		await expect(EqFinanceStakingHZmo7B8.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQe2A8XJ = await EqFinanceStaking.new({from: accounts[2]});
		const addressaxnwbHR = accounts[3]
		const addressOZtmfMV = accounts[5]
//		const addressBtB38Xi = await EqFinanceStakingQe2A8XJ.transferOwnership.call(addressaxnwbHR, {from: accounts[1]});
//		await EqFinanceStakingQe2A8XJ.claimDivs.call({from: accounts[5]});
//		const uintSmn4n5W = await EqFinanceStakingQe2A8XJ.getPendingDivs.call(addressOZtmfMV, {from: accounts[1]});
//		await EqFinanceStakingQe2A8XJ.onlyOwner.call({from: accounts[2]});

		await expect(EqFinanceStakingQe2A8XJ.transferOwnership.call(addressaxnwbHR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQdXJl0V = await EqFinanceStaking.new({from: accounts[2]});
		const uintHJwx30I = BigInt("1309")
		const uintg9pZtrW = BigInt("1349")
//		const uintTeoVfqD = await EqFinanceStakingQdXJl0V.deposit.call(uintHJwx30I, {from: accounts[2]});
//		const uintWCQQBy = await EqFinanceStakingQdXJl0V.deposit.call(uintg9pZtrW, {from: accounts[4]});

		await expect(EqFinanceStakingQdXJl0V.deposit.call(uintHJwx30I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingq3cQyPS = await EqFinanceStaking.new({from: accounts[4]});
		const addressOSvZfTJ = accounts[1]
		const addressgGztluv = accounts[0]
//		await EqFinanceStakingq3cQyPS.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingq3cQyPS.onlyOwner.call({from: accounts[0]});
//		const uintpsXPabi = await EqFinanceStakingq3cQyPS.getPendingDivs.call(addressOSvZfTJ, {from: accounts[4]});
//		await EqFinanceStakingq3cQyPS.onlyOwner.call({from: accounts[0]});
//		const uintSDcUOpm = await EqFinanceStakingq3cQyPS.getPendingDivs.call(addressgGztluv, {from: accounts[1]});

		await expect(EqFinanceStakingq3cQyPS.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingp5QxQoa = await EqFinanceStaking.new({from: accounts[1]});
		const uintkHFTGsu = BigInt("344")
//		await EqFinanceStakingp5QxQoa.claimDivs.call({from: accounts[4]});
//		const uints0xdZap = await EqFinanceStakingp5QxQoa.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingp5QxQoa.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintV8PWqGX = await EqFinanceStakingp5QxQoa.withdraw.call(uintkHFTGsu, {from: accounts[3]});

		await expect(EqFinanceStakingp5QxQoa.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingy5H7HdK = await EqFinanceStaking.new({from: accounts[4]});
		const uintsLVJjZl = BigInt("1559")
		const uint2d7npH = BigInt("1118")
		const uintfY8qdGP = await EqFinanceStakingy5H7HdK.getStakingAndDaoAmount.call({from: accounts[0]});
//		const uintvEQbw0q = await EqFinanceStakingy5H7HdK.deposit.call(uintsLVJjZl, {from: accounts[2]});
//		const uinthbKOrBT = await EqFinanceStakingy5H7HdK.deposit.call(uint2d7npH, {from: accounts[5]});

		assert.equal(uintfY8qdGP, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingy5H7HdK.deposit.call(uintsLVJjZl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingp5QxQoa = await EqFinanceStaking.new({from: accounts[1]});
		const addressX5f26TO = "0x0000000000000000000000000000000000000001"
		const uintoqJ7amC = BigInt("558")
		const uintSXABJZG = BigInt("351")
		const addressYZnTQVR = await EqFinanceStakingp5QxQoa.transferOwnership.call(addressX5f26TO, {from: accounts[1]});
//		await EqFinanceStakingp5QxQoa.claimDivs.call({from: accounts[4]});
//		const uintS6S3X1v = await EqFinanceStakingp5QxQoa.deposit.call(uintoqJ7amC, {from: accounts[0]});
//		const uints0xdZap = await EqFinanceStakingp5QxQoa.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingp5QxQoa.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintV8PWqGX = await EqFinanceStakingp5QxQoa.withdraw.call(uintSXABJZG, {from: accounts[3]});

		await expect(EqFinanceStakingp5QxQoa.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingzLCPnaA = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJs3PQYQ = accounts[1]
		const uintZLkHYqh = await EqFinanceStakingzLCPnaA.getPendingDivs.call(addressJs3PQYQ, {from: accounts[5]});
		await EqFinanceStakingzLCPnaA.claimDivs.call({from: accounts[0]});
		const uintSN4JWB6 = await EqFinanceStakingzLCPnaA.getNumberOfHolders.call({from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingPLqpAia = await EqFinanceStaking.new({from: accounts[3]});
		const uint1917PJ = BigInt("180")
		const addressUinjR2A = accounts[2]
		const addresswlzyftM = accounts[0]
//		const addressnrgnBcU = await EqFinanceStakingPLqpAia.transferAnyERC20Tokens.call(addresswlzyftM, addressUinjR2A, uint1917PJ, {from: accounts[3]});
//		const uintWJjrTgJ = await EqFinanceStakingPLqpAia.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uinthCRDvu = await EqFinanceStakingPLqpAia.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(EqFinanceStakingPLqpAia.transferAnyERC20Tokens.call(addresswlzyftM, addressUinjR2A, uint1917PJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingy5H7HdK = await EqFinanceStaking.new({from: accounts[4]});
		const uintIEmjLpI = BigInt("0")
		const uintSHrNe3p = BigInt("1413")
		const addressczQI5JA = accounts[4]
		const addressoZh6bTC = accounts[5]
//		const uintVFIs1uw = await EqFinanceStakingy5H7HdK.deposit.call(uintIEmjLpI, {from: accounts[0]});
//		const addresshb2wUFk = await EqFinanceStakingy5H7HdK.transferAnyERC20Tokens.call(addressoZh6bTC, addressczQI5JA, uintSHrNe3p, {from: accounts[5]});

		await expect(EqFinanceStakingy5H7HdK.deposit.call(uintIEmjLpI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})