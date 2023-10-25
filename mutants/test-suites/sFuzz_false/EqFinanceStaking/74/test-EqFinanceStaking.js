const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVq9JNoM = await EqFinanceStaking.new({from: accounts[5]});
		const uintFlR4yAb = BigInt("482")
		const addressgWBrQ9T = accounts[1]
//		await EqFinanceStakingVq9JNoM.claimDivs.call({from: accounts[3]});
//		const uintgDGQR3k = await EqFinanceStakingVq9JNoM.deposit.call(uintFlR4yAb, {from: accounts[3]});
//		const addressxhI2wb = await EqFinanceStakingVq9JNoM.transferOwnership.call(addressgWBrQ9T, {from: accounts[3]});
//		await EqFinanceStakingVq9JNoM.onlyOwner.call({from: accounts[4]});

		await expect(EqFinanceStakingVq9JNoM.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSheHEpy = await EqFinanceStaking.new({from: accounts[4]});
		const addressvOM9AP = accounts[1]
		const addressznZNdQ6 = accounts[4]
		const addressLzPno8U = await EqFinanceStakingSheHEpy.transferOwnership.call(addressvOM9AP, {from: accounts[4]});
		const uintBDJTWss = await EqFinanceStakingSheHEpy.getPendingDivs.call(addressznZNdQ6, {from: accounts[0]});
		const uintKagc00 = await EqFinanceStakingSheHEpy.getStakingAndDaoAmount.call({from: accounts[2]});
//		await EqFinanceStakingSheHEpy.onlyOwner.call({from: accounts[2]});
//		await EqFinanceStakingSheHEpy.claimDivs.call({from: accounts[2]});

		assert.equal(uintBDJTWss, BigInt("0"))
		assert.equal(uintKagc00, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingSheHEpy.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingEUR2AOv = await EqFinanceStaking.new({from: accounts[0]});
		const uint2xL7nV = BigInt("268")
		const uintCc3lDTv = BigInt("630")
//		const uintwzVt6O = await EqFinanceStakingEUR2AOv.withdraw.call(uint2xL7nV, {from: accounts[3]});
//		const uintWfqbBp8 = await EqFinanceStakingEUR2AOv.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uinty3UxSHu = await EqFinanceStakingEUR2AOv.withdraw.call(uintCc3lDTv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingEUR2AOv.withdraw.call(uint2xL7nV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwJE5gCW = await EqFinanceStaking.new({from: accounts[4]});
		const uintHT3km61 = await EqFinanceStakingwJE5gCW.getNumberOfHolders.call({from: accounts[5]});
//		await EqFinanceStakingwJE5gCW.onlyOwner.call({from: accounts[2]});
//		await EqFinanceStakingwJE5gCW.claimDivs.call({from: accounts[2]});
//		await EqFinanceStakingwJE5gCW.claimDivs.call({from: accounts[4]});

		assert.equal(uintHT3km61, BigInt("0"))
		await expect(EqFinanceStakingwJE5gCW.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingnzVo7j6 = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintODBvNNU = BigInt("635")
		const uintXa4UemU = BigInt("1616")
		const addressXWZEMzJ = "0x0000000000000000000000000000000000000001"
		const uintYiywgrd = await EqFinanceStakingnzVo7j6.deposit.call(uintODBvNNU, {from: accounts[1]});
		const uintLBe87cP = await EqFinanceStakingnzVo7j6.withdraw.call(uintXa4UemU, {from: accounts[2]});
		const addressPZqYgC3 = await EqFinanceStakingnzVo7j6.transferOwnership.call(addressXWZEMzJ, {from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwJE5gCW = await EqFinanceStaking.new({from: accounts[4]});
		const uint8DaxCb = BigInt("1368")
		const addressJiCaLG8 = accounts[1]
		const addressFjCSmus = accounts[4]
		const uinteO6qCrL = await EqFinanceStakingwJE5gCW.getNumberOfHolders.call({from: accounts[4]});
//		await EqFinanceStakingwJE5gCW.claimDivs.call({from: accounts[4]});
//		const addressTdOTcLp = await EqFinanceStakingwJE5gCW.transferAnyERC20Tokens.call(addressFjCSmus, addressJiCaLG8, uint8DaxCb, {from: accounts[4]});

		assert.equal(uinteO6qCrL, BigInt("0"))
		await expect(EqFinanceStakingwJE5gCW.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})