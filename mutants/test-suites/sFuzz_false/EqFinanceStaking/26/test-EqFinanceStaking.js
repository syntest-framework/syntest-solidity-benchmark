const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNRgBgkF = await EqFinanceStaking.new({from: accounts[3]});
		const uintBRDQ119 = BigInt("586")
		const uintxWAV06l = BigInt("999")
		const uintt91HkBC = BigInt("1491")
//		const uintOtd4gQf = await EqFinanceStakingNRgBgkF.withdraw.call(uintBRDQ119, {from: accounts[1]});
//		const uintFzVS4K0 = await EqFinanceStakingNRgBgkF.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uinthKXFr46 = await EqFinanceStakingNRgBgkF.withdraw.call(uintxWAV06l, {from: accounts[2]});
//		await EqFinanceStakingNRgBgkF.claimDivs.call({from: accounts[0]});
//		const uintdEdHmNX = await EqFinanceStakingNRgBgkF.withdraw.call(uintt91HkBC, {from: accounts[0]});

		await expect(EqFinanceStakingNRgBgkF.withdraw.call(uintBRDQ119, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLNAYUnI = await EqFinanceStaking.new({from: accounts[3]});
		const addressldGjpax = accounts[1]
		const uint1WwqQx = await EqFinanceStakingLNAYUnI.getPendingDivs.call(addressldGjpax, {from: accounts[3]});
		const uintbRzQVYG = await EqFinanceStakingLNAYUnI.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint1WwqQx, BigInt("0"))
		assert.equal(uintbRzQVYG, BigInt("3000000000000000000000000"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrgHJvt9 = await EqFinanceStaking.new({from: accounts[0]});
		const addressoHnO2jq = accounts[1]
		const uintQdeufzs = await EqFinanceStakingrgHJvt9.getPendingDivs.call(addressoHnO2jq, {from: accounts[0]});
//		await EqFinanceStakingrgHJvt9.onlyOwner.call({from: accounts[5]});

		assert.equal(uintQdeufzs, BigInt("0"))
		await expect(EqFinanceStakingrgHJvt9.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingExZmUWg = await EqFinanceStaking.new({from: accounts[4]});
		const addressutJzMEy = accounts[1]
		const uintOrDhI8n = await EqFinanceStakingExZmUWg.getNumberOfHolders.call({from: accounts[0]});
		const uintX1VOoa1 = await EqFinanceStakingExZmUWg.getPendingDivs.call(addressutJzMEy, {from: accounts[1]});
//		await EqFinanceStakingExZmUWg.claimDivs.call({from: accounts[2]});

		assert.equal(uintOrDhI8n, BigInt("0"))
		assert.equal(uintX1VOoa1, BigInt("0"))
		await expect(EqFinanceStakingExZmUWg.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggwnr2mT = await EqFinanceStaking.new({from: accounts[2]});
		const uintYrBvMPa = BigInt("154")
		const uintFcC5Ywp = BigInt("43")
//		const uintfVwISGO = await EqFinanceStakinggwnr2mT.deposit.call(uintYrBvMPa, {from: accounts[3]});
//		const uintl3JsVu9 = await EqFinanceStakinggwnr2mT.deposit.call(uintFcC5Ywp, {from: accounts[4]});
//		await EqFinanceStakinggwnr2mT.onlyOwner.call({from: accounts[0]});

		await expect(EqFinanceStakinggwnr2mT.deposit.call(uintYrBvMPa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJu3Owqh = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJF7qJT = BigInt("379")
		const addressC9HQ6q9 = "0x0000000000000000000000000000000000000001"
		const uintR4I5Cxf = await EqFinanceStakingJu3Owqh.withdraw.call(uintJF7qJT, {from: accounts[0]});
		await EqFinanceStakingJu3Owqh.claimDivs.call({from: accounts[1]});
		const uintpSFKweS = await EqFinanceStakingJu3Owqh.getPendingDivs.call(addressC9HQ6q9, {from: accounts[4]});
		await EqFinanceStakingJu3Owqh.onlyOwner.call({from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLNAYUnI = await EqFinanceStaking.new({from: accounts[3]});
		const addressElJumW = accounts[3]
		const addresshUVC0MS = accounts[2]
		const addressUcdk0F = await EqFinanceStakingLNAYUnI.transferOwnership.call(addressElJumW, {from: accounts[3]});
		const uint1WwqQx = await EqFinanceStakingLNAYUnI.getPendingDivs.call(addresshUVC0MS, {from: accounts[3]});

		assert.equal(uint1WwqQx, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKY92uZ = await EqFinanceStaking.new({from: accounts[0]});
		const uintx5QuVV5 = BigInt("1567")
		const addressecaFdXP = accounts[4]
		const addressSvm7HfB = accounts[2]
//		await EqFinanceStakingKY92uZ.claimDivs.call({from: accounts[5]});
//		await EqFinanceStakingKY92uZ.claimDivs.call({from: accounts[4]});
//		const addressJ6ZW9f2 = await EqFinanceStakingKY92uZ.transferAnyERC20Tokens.call(addressSvm7HfB, addressecaFdXP, uintx5QuVV5, {from: accounts[0]});

		await expect(EqFinanceStakingKY92uZ.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})