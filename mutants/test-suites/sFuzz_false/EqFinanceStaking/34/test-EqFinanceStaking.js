const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakings0hB19A = await EqFinanceStaking.new({from: accounts[5]});
		const uintHyZSwFl = BigInt("1307")
//		const uinthestb6C = await EqFinanceStakings0hB19A.withdraw.call(uintHyZSwFl, {from: accounts[2]});
//		const uintsr01iu = await EqFinanceStakings0hB19A.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakings0hB19A.withdraw.call(uintHyZSwFl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwLJ50bk = await EqFinanceStaking.new({from: accounts[4]});
		const uintw2D8VQQ = BigInt("539")
//		await EqFinanceStakingwLJ50bk.claimDivs.call({from: accounts[3]});
//		const uintUpsDcY = await EqFinanceStakingwLJ50bk.withdraw.call(uintw2D8VQQ, {from: accounts[2]});

		await expect(EqFinanceStakingwLJ50bk.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingiMWNMC1 = await EqFinanceStaking.new({from: accounts[1]});
		const uintU3O6VA8 = BigInt("472")
		const addressYa13o4R = accounts[2]
		const addressRyMqjB = accounts[3]
		const addresslmWY0P = accounts[4]
//		const address0yuhIF = await EqFinanceStakingiMWNMC1.transferAnyERC20Tokens.call(addressRyMqjB, addressYa13o4R, uintU3O6VA8, {from: accounts[0]});
//		const addressteG37yZ = await EqFinanceStakingiMWNMC1.transferOwnership.call(addresslmWY0P, {from: accounts[2]});
//		const uintGtKLoc4 = await EqFinanceStakingiMWNMC1.getNumberOfHolders.call({from: accounts[2]});
//		await EqFinanceStakingiMWNMC1.onlyOwner.call({from: accounts[4]});

		await expect(EqFinanceStakingiMWNMC1.transferAnyERC20Tokens.call(addressRyMqjB, addressYa13o4R, uintU3O6VA8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingIcbzsA = await EqFinanceStaking.new({from: accounts[0]});
		const addressSgGa9n2 = accounts[1]
		const uintlWhFXZ = await EqFinanceStakingIcbzsA.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintshclnaK = await EqFinanceStakingIcbzsA.getNumberOfHolders.call({from: accounts[4]});
		const uintrPl0gtn = await EqFinanceStakingIcbzsA.getPendingDivs.call(addressSgGa9n2, {from: accounts[0]});
		const uintiwA9rDU = await EqFinanceStakingIcbzsA.getNumberOfHolders.call({from: accounts[3]});
//		await EqFinanceStakingIcbzsA.claimDivs.call({from: accounts[4]});

		assert.equal(uintiwA9rDU, BigInt("0"))
		assert.equal(uintlWhFXZ, BigInt("0"))
		assert.equal(uintrPl0gtn, BigInt("0"))
		assert.equal(uintshclnaK, BigInt("0"))
		await expect(EqFinanceStakingIcbzsA.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingtCyAe9 = await EqFinanceStaking.new({from: accounts[0]});
		const uintZ1pCkXH = BigInt("549")
		const uintzLOV2qG = BigInt("951")
//		const uintAn9Zd8S = await EqFinanceStakingtCyAe9.deposit.call(uintZ1pCkXH, {from: accounts[4]});
//		const uinto52xO3s = await EqFinanceStakingtCyAe9.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintN25gBTG = await EqFinanceStakingtCyAe9.withdraw.call(uintzLOV2qG, {from: accounts[3]});

		await expect(EqFinanceStakingtCyAe9.deposit.call(uintZ1pCkXH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwLJ50bk = await EqFinanceStaking.new({from: accounts[4]});
		const uintvaYLxsm = BigInt("538")
		const addresslHYs05t = accounts[3]
//		await EqFinanceStakingwLJ50bk.onlyOwner.call({from: accounts[3]});
//		await EqFinanceStakingwLJ50bk.claimDivs.call({from: accounts[3]});
//		const uintUpsDcY = await EqFinanceStakingwLJ50bk.withdraw.call(uintvaYLxsm, {from: accounts[2]});
//		const uintLj9FBBM = await EqFinanceStakingwLJ50bk.getPendingDivs.call(addresslHYs05t, {from: accounts[2]});

		await expect(EqFinanceStakingwLJ50bk.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwLJ50bk = await EqFinanceStaking.new({from: accounts[4]});
//		await EqFinanceStakingwLJ50bk.claimDivs.call({from: accounts[3]});
//		const uintYAU6CBw = await EqFinanceStakingwLJ50bk.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(EqFinanceStakingwLJ50bk.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingaLfjUXJ = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHI9pqHJ = BigInt("1383")
		const addresssKQH1TA = accounts[0]
		const uintqdw0GI2 = await EqFinanceStakingaLfjUXJ.deposit.call(uintHI9pqHJ, {from: accounts[2]});
		const uintToiCVPi = await EqFinanceStakingaLfjUXJ.getStakingAndDaoAmount.call({from: accounts[4]});
		const uinthlNiW1c = await EqFinanceStakingaLfjUXJ.getPendingDivs.call(addresssKQH1TA, {from: accounts[3]});
		const uintkHnCSp = await EqFinanceStakingaLfjUXJ.getStakingAndDaoAmount.call({from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakings0hB19A = await EqFinanceStaking.new({from: accounts[5]});
		const uintq6SbPjl = BigInt("651")
		const addressxZmFxCc = accounts[0]
		const addresshJiXeW2 = accounts[4]
		const uintbc6yZKU = BigInt("1333")
//		const addressE6Mtc5R = await EqFinanceStakings0hB19A.transferAnyERC20Tokens.call(addresshJiXeW2, addressxZmFxCc, uintq6SbPjl, {from: accounts[5]});
//		const uinthestb6C = await EqFinanceStakings0hB19A.withdraw.call(uintbc6yZKU, {from: accounts[2]});

		await expect(EqFinanceStakings0hB19A.transferAnyERC20Tokens.call(addresshJiXeW2, addressxZmFxCc, uintq6SbPjl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwLJ50bk = await EqFinanceStaking.new({from: accounts[4]});
		const addressi5mhXvG = accounts[4]
		const uintC8q7Udp = BigInt("1320")
		const addresstTiwCNl = await EqFinanceStakingwLJ50bk.transferOwnership.call(addressi5mhXvG, {from: accounts[4]});
		const uintYAU6CBw = await EqFinanceStakingwLJ50bk.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintinq0ob = await EqFinanceStakingwLJ50bk.withdraw.call(uintC8q7Udp, {from: accounts[1]});

		assert.equal(uintYAU6CBw, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingwLJ50bk.withdraw.call(uintC8q7Udp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})