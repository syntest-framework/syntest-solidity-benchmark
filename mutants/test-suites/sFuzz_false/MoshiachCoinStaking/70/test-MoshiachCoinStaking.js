const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingAbHTKt = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressllgvJDw = accounts[1]
		const uintKIZezV4 = await MoshiachCoinStakingAbHTKt.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintsld3Qcz = await MoshiachCoinStakingAbHTKt.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintq6QJwFk = await MoshiachCoinStakingAbHTKt.getPendingDivs.call(addressllgvJDw, {from: accounts[1]});

		assert.equal(uintKIZezV4, BigInt("60000000000000000000000000"))
		assert.equal(uintq6QJwFk, BigInt("0"))
		assert.equal(uintsld3Qcz, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkNfrzYH = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintxolZrKh = await MoshiachCoinStakingkNfrzYH.getNumberOfHolders.call({from: accounts[1]});
//		await MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]});

		assert.equal(uintxolZrKh, BigInt("0"))
		await expect(MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingFjEP7aA = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintcvPrgdo = BigInt("361")
//		const uintEax3ZnR = await MoshiachCoinStakingFjEP7aA.deposit.call(uintcvPrgdo, {from: accounts[3]});
//		const uintVvXsC53 = await MoshiachCoinStakingFjEP7aA.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uinttphi0CV = await MoshiachCoinStakingFjEP7aA.getNumberOfHolders.call({from: accounts[2]});
//		await MoshiachCoinStakingFjEP7aA.claimDivs.call({from: accounts[3]});
//		const uintZyZrBnq = await MoshiachCoinStakingFjEP7aA.getNumberOfHolders.call({from: accounts[1]});

		await expect(MoshiachCoinStakingFjEP7aA.deposit.call(uintcvPrgdo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingViBHhhR = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintbzpumL6 = BigInt("488")
		const uintOzFRR41 = BigInt("307")
		const addressT2XyLoY = accounts[1]
		const address6Z6nwT = accounts[1]
		const uintImpXp8N = BigInt("325")
//		const uintKEDsevS = await MoshiachCoinStakingViBHhhR.withdraw.call(uintbzpumL6, {from: accounts[1]});
//		await MoshiachCoinStakingViBHhhR.claimDivs.call({from: accounts[0]});
//		const addressIAsXDOK = await MoshiachCoinStakingViBHhhR.transferAnyERC20Tokens.call(address6Z6nwT, addressT2XyLoY, uintOzFRR41, {from: accounts[2]});
//		const uintlwEiKA = await MoshiachCoinStakingViBHhhR.deposit.call(uintImpXp8N, {from: accounts[4]});

		await expect(MoshiachCoinStakingViBHhhR.withdraw.call(uintbzpumL6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkNfrzYH = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressZ7VTErE = accounts[3]
		const uintWgbuUX = await MoshiachCoinStakingkNfrzYH.getPendingDivs.call(addressZ7VTErE, {from: accounts[0]});
//		await MoshiachCoinStakingkNfrzYH.onlyOwner.call({from: accounts[2]});
//		const uintxWBIvuc = await MoshiachCoinStakingkNfrzYH.getNumberOfHolders.call({from: accounts[3]});
//		const uintxolZrKh = await MoshiachCoinStakingkNfrzYH.getNumberOfHolders.call({from: accounts[1]});
//		await MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]});

		assert.equal(uintWgbuUX, BigInt("0"))
		await expect(MoshiachCoinStakingkNfrzYH.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkNfrzYH = await MoshiachCoinStaking.new({from: accounts[2]});
		const addresslcQ6mlQ = accounts[1]
		const addressFoiTVy7 = await MoshiachCoinStakingkNfrzYH.transferOwnership.call(addresslcQ6mlQ, {from: accounts[2]});
//		await MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]});

		await expect(MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkNfrzYH = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintv3jBVO6 = BigInt("439")
		const addresseHvBnAW = accounts[5]
		const addressDNiM0Z = accounts[2]
//		await MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]});
//		const addressyBUNb3e = await MoshiachCoinStakingkNfrzYH.transferAnyERC20Tokens.call(addressDNiM0Z, addresseHvBnAW, uintv3jBVO6, {from: accounts[2]});
//		const uintxULir1b = await MoshiachCoinStakingkNfrzYH.getStakingAndDaoAmount.call({from: accounts[2]});

		await expect(MoshiachCoinStakingkNfrzYH.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking47pX9L = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPrypOnq = BigInt("441")
		const uintDSAfh8Y = BigInt("1567")
		const uintSBps5Im = await MoshiachCoinStaking47pX9L.deposit.call(uintPrypOnq, {from: accounts[2]});
		await MoshiachCoinStaking47pX9L.claimDivs.call({from: accounts[0]});
		const uintKSKsfzN = await MoshiachCoinStaking47pX9L.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintdw0mvVV = await MoshiachCoinStaking47pX9L.deposit.call(uintDSAfh8Y, {from: accounts[4]});
		const uintzteQSHS = await MoshiachCoinStaking47pX9L.getStakingAndDaoAmount.call({from: accounts[0]});
	});
})