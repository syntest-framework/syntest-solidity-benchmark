const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRTr0eij = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressadGxPcq = accounts[1]
		const addressZAfVUdY = accounts[1]
		await MoshiachCoinStakingRTr0eij.onlyOwner.call({from: accounts[0]});
		await MoshiachCoinStakingRTr0eij.claimDivs.call({from: accounts[4]});
		const address0lfwwu = await MoshiachCoinStakingRTr0eij.transferOwnership.call(addressadGxPcq, {from: accounts[3]});
		await MoshiachCoinStakingRTr0eij.claimDivs.call({from: accounts[4]});
		const uint0nTYLV = await MoshiachCoinStakingRTr0eij.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressnURtWX3 = await MoshiachCoinStakingRTr0eij.transferOwnership.call(addressZAfVUdY, {from: accounts[1]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingq9a5Jf5 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressN91To8N = accounts[4]
		const uintFGRNI2A = BigInt("2019")
		const addresse0NTZVa = accounts[1]
		const addressLHlWtfv = "0x0000000000000000000000000000000000000001"
		const uintVlL4zOj = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[5]});
		const uinty33PZJh = await MoshiachCoinStakingq9a5Jf5.getPendingDivs.call(addressN91To8N, {from: accounts[1]});
		const uint99h8Bj = await MoshiachCoinStakingq9a5Jf5.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintWpXdm9Y = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[2]});
		const addressWqOITU = await MoshiachCoinStakingq9a5Jf5.transferAnyERC20Tokens.call(addressLHlWtfv, addresse0NTZVa, uintFGRNI2A, {from: accounts[0]});
		await MoshiachCoinStakingq9a5Jf5.claimDivs.call({from: accounts[0]});

		assert.equal(uint99h8Bj, BigInt("60000000000000000000000000"))
		assert.equal(uintVlL4zOj, BigInt("0"))
		assert.equal(uintWpXdm9Y, BigInt("0"))
		assert.equal(uinty33PZJh, BigInt("0"))
		await expect(MoshiachCoinStakingq9a5Jf5.transferAnyERC20Tokens.call(addressLHlWtfv, addresse0NTZVa, uintFGRNI2A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingScIgqNT = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintH5pKuqF = BigInt("437")
		const uintFMek7Vn = BigInt("230")
		const uintj89ONU = BigInt("1928")
		const uintdueq2Tn = BigInt("1825")
		const addressWGfxPZY = accounts[3]
		const addressJA8VGIK = accounts[2]
		const uintNcWsAWf = await MoshiachCoinStakingScIgqNT.deposit.call(uintH5pKuqF, {from: accounts[4]});
		const uintL24qKfR = await MoshiachCoinStakingScIgqNT.deposit.call(uintFMek7Vn, {from: accounts[3]});
		const uintvomL06F = await MoshiachCoinStakingScIgqNT.getNumberOfHolders.call({from: accounts[3]});
		const uintoEP9RU = await MoshiachCoinStakingScIgqNT.withdraw.call(uintj89ONU, {from: accounts[1]});
		const addressC1GenXo = await MoshiachCoinStakingScIgqNT.transferAnyERC20Tokens.call(addressJA8VGIK, addressWGfxPZY, uintdueq2Tn, {from: accounts[0]});
		await MoshiachCoinStakingScIgqNT.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakingScIgqNT.deposit.call(uintH5pKuqF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjAlBTrw = await MoshiachCoinStaking.new({from: accounts[4]});
		const uinthNbg6zz = BigInt("308")
		const uintJyqM6bC = await MoshiachCoinStakingjAlBTrw.getStakingAndDaoAmount.call({from: accounts[2]});
		const uinteMtLvoi = await MoshiachCoinStakingjAlBTrw.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintXwxM8Tb = await MoshiachCoinStakingjAlBTrw.withdraw.call(uinthNbg6zz, {from: accounts[0]});

		assert.equal(uintJyqM6bC, BigInt("60000000000000000000000000"))
		assert.equal(uinteMtLvoi, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingjAlBTrw.withdraw.call(uinthNbg6zz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingduG5w5T = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressvkKVVB = accounts[5]
		const uintWKncFHq = await MoshiachCoinStakingduG5w5T.getStakingAndDaoAmount.call({from: accounts[0]});
		await MoshiachCoinStakingduG5w5T.claimDivs.call({from: accounts[2]});
		const uintCX8hsQq = await MoshiachCoinStakingduG5w5T.getPendingDivs.call(addressvkKVVB, {from: accounts[3]});

		assert.equal(uintWKncFHq, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingduG5w5T.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingiY4vdD0 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresso0n9p5O = accounts[3]
		const uintYMZM0DS = BigInt("807")
		const uintbguBUNA = BigInt("1003")
		const uintkDa5lQu = await MoshiachCoinStakingiY4vdD0.getPendingDivs.call(addresso0n9p5O, {from: accounts[5]});
		await MoshiachCoinStakingiY4vdD0.onlyOwner.call({from: accounts[2]});
		const uintLG7mi3A = await MoshiachCoinStakingiY4vdD0.deposit.call(uintYMZM0DS, {from: accounts[0]});
		const uintCa3zWfQ = await MoshiachCoinStakingiY4vdD0.withdraw.call(uintbguBUNA, {from: accounts[0]});

		assert.equal(uintkDa5lQu, BigInt("0"))
		await expect(MoshiachCoinStakingiY4vdD0.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingq9a5Jf5 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressgxCIS5G = accounts[0]
		const addressyn3X9Pp = accounts[4]
		const uintNl0ZyAv = BigInt("148")
		const uintVlL4zOj = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[5]});
		const addressypUt8XT = await MoshiachCoinStakingq9a5Jf5.transferOwnership.call(addressgxCIS5G, {from: accounts[3]});
		const uinty33PZJh = await MoshiachCoinStakingq9a5Jf5.getPendingDivs.call(addressyn3X9Pp, {from: accounts[1]});
		const uint99h8Bj = await MoshiachCoinStakingq9a5Jf5.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintWpXdm9Y = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[2]});
		const uintWQRdlAi = await MoshiachCoinStakingq9a5Jf5.deposit.call(uintNl0ZyAv, {from: accounts[3]});
		await MoshiachCoinStakingq9a5Jf5.claimDivs.call({from: accounts[0]});

		assert.equal(uint99h8Bj, BigInt("60000000000000000000000000"))
		assert.equal(uintVlL4zOj, BigInt("0"))
		assert.equal(uintWpXdm9Y, BigInt("0"))
		assert.equal(uinty33PZJh, BigInt("0"))
		await expect(MoshiachCoinStakingq9a5Jf5.deposit.call(uintNl0ZyAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingq9a5Jf5 = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintthdpXgG = BigInt("0")
		const addressLCWFFG = accounts[3]
		const addressZyimKqv = accounts[0]
		const addressbNHJV0E = accounts[4]
		const uintyQ2bcnG = BigInt("148")
		const uintVlL4zOj = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakingq9a5Jf5.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintUqoUD4a = await MoshiachCoinStakingq9a5Jf5.deposit.call(uintthdpXgG, {from: accounts[2]});
		const addressVNhb3pB = await MoshiachCoinStakingq9a5Jf5.transferOwnership.call(addressLCWFFG, {from: accounts[3]});
		const addressypUt8XT = await MoshiachCoinStakingq9a5Jf5.transferOwnership.call(addressZyimKqv, {from: accounts[3]});
		const uinty33PZJh = await MoshiachCoinStakingq9a5Jf5.getPendingDivs.call(addressbNHJV0E, {from: accounts[1]});
		await MoshiachCoinStakingq9a5Jf5.claimDivs.call({from: accounts[4]});
		const uint99h8Bj = await MoshiachCoinStakingq9a5Jf5.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintCChPmPa = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[2]});
		const uintWpXdm9Y = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[2]});
		const uintEuiDdTV = await MoshiachCoinStakingq9a5Jf5.getNumberOfHolders.call({from: accounts[0]});
		const uintWQRdlAi = await MoshiachCoinStakingq9a5Jf5.deposit.call(uintyQ2bcnG, {from: accounts[3]});

		assert.equal(uintVlL4zOj, BigInt("0"))
		await expect(MoshiachCoinStakingq9a5Jf5.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjTjsrDq = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressGxJV35B = accounts[4]
		const uintu0g8ZKH = BigInt("243")
		const addressnwzJJxn = accounts[3]
		const addressTedaidD = accounts[3]
		const uinteIIpS9C = await MoshiachCoinStakingjTjsrDq.getPendingDivs.call(addressGxJV35B, {from: accounts[1]});
		await MoshiachCoinStakingjTjsrDq.claimDivs.call({from: accounts[1]});
		const addressC5pA3n7 = await MoshiachCoinStakingjTjsrDq.transferAnyERC20Tokens.call(addressTedaidD, addressnwzJJxn, uintu0g8ZKH, {from: accounts[4]});

		assert.equal(uinteIIpS9C, BigInt("0"))
		await expect(MoshiachCoinStakingjTjsrDq.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})