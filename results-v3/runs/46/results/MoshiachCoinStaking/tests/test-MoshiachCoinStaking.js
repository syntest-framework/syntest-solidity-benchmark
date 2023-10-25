const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkQCdtN7 = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintOM4CjYI = BigInt("1390")
		const addresseF7aUx6 = accounts[4]
		const uintQONZ1Yx = await MoshiachCoinStakingkQCdtN7.deposit.call(uintOM4CjYI, {from: accounts[5]});
		const addresseGLEwq = await MoshiachCoinStakingkQCdtN7.transferOwnership.call(addresseF7aUx6, {from: accounts[4]});
		await MoshiachCoinStakingkQCdtN7.claimDivs.call({from: accounts[2]});
		const uintLk8doCn = await MoshiachCoinStakingkQCdtN7.getNumberOfHolders.call({from: accounts[2]});
		const uintgkLw0ow = await MoshiachCoinStakingkQCdtN7.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(MoshiachCoinStakingkQCdtN7.deposit.call(uintOM4CjYI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJ2aH7FO = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressJtl0dQb = accounts[5]
		const addressO2m1mmO = accounts[2]
		await MoshiachCoinStakingJ2aH7FO.claimDivs.call({from: accounts[1]});
		const uintk1OzF1w = await MoshiachCoinStakingJ2aH7FO.getPendingDivs.call(addressJtl0dQb, {from: accounts[5]});
		const uintetbo51Y = await MoshiachCoinStakingJ2aH7FO.getPendingDivs.call(addressO2m1mmO, {from: accounts[4]});
		const uintLXjg2ty = await MoshiachCoinStakingJ2aH7FO.getNumberOfHolders.call({from: accounts[3]});
		const uintZFW5nVC = await MoshiachCoinStakingJ2aH7FO.getNumberOfHolders.call({from: accounts[0]});

		await expect(MoshiachCoinStakingJ2aH7FO.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghhqMzYW = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressgzS2cKG = accounts[1]
		const uintMzM9oVt = await MoshiachCoinStakinghhqMzYW.getNumberOfHolders.call({from: accounts[1]});
		const uintqiCMW3 = await MoshiachCoinStakinghhqMzYW.getPendingDivs.call(addressgzS2cKG, {from: accounts[5]});
		await MoshiachCoinStakinghhqMzYW.onlyOwner.call({from: accounts[1]});

		assert.equal(uintMzM9oVt, BigInt("0"))
		assert.equal(uintqiCMW3, BigInt("0"))
		await expect(MoshiachCoinStakinghhqMzYW.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqoTnGg2 = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmFYig4E = accounts[0]
		const uintakFUS88 = BigInt("173")
		const uintTGUEXrg = BigInt("979")
		const addresskUXICA8 = accounts[0]
		const addressU8FpyUG = accounts[0]
		const addresslVVzlYx = await MoshiachCoinStakingqoTnGg2.transferOwnership.call(addressmFYig4E, {from: accounts[3]});
		const uintHEsyufm = await MoshiachCoinStakingqoTnGg2.getNumberOfHolders.call({from: accounts[2]});
		const uintvezXUyY = await MoshiachCoinStakingqoTnGg2.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintQEl3kR = await MoshiachCoinStakingqoTnGg2.deposit.call(uintakFUS88, {from: accounts[1]});
		const addressb1Q9wKc = await MoshiachCoinStakingqoTnGg2.transferAnyERC20Tokens.call(addressU8FpyUG, addresskUXICA8, uintTGUEXrg, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJozu4sj = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintmc7s3ib = BigInt("137")
		const addressrO8Fxe = accounts[1]
		const uintcIxXW28 = await MoshiachCoinStakingJozu4sj.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintlTZEC0o = await MoshiachCoinStakingJozu4sj.deposit.call(uintmc7s3ib, {from: accounts[1]});
		const uintsmNM8mG = await MoshiachCoinStakingJozu4sj.getPendingDivs.call(addressrO8Fxe, {from: accounts[0]});
		await MoshiachCoinStakingJozu4sj.onlyOwner.call({from: accounts[1]});
		const uintt5cZKmz = await MoshiachCoinStakingJozu4sj.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintcIxXW28, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingJozu4sj.deposit.call(uintmc7s3ib, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbeMcg88 = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintADy8Pwn = BigInt("673")
		const addressCPp9GQg = accounts[3]
		const addressaiWmbjF = accounts[0]
		const addressEhx0S6 = accounts[4]
		const uintaxqGlGJ = await MoshiachCoinStakingbeMcg88.withdraw.call(uintADy8Pwn, {from: accounts[2]});
		const uintolR4uvl = await MoshiachCoinStakingbeMcg88.getNumberOfHolders.call({from: accounts[1]});
		await MoshiachCoinStakingbeMcg88.onlyOwner.call({from: accounts[4]});
		const uintYBJxtHz = await MoshiachCoinStakingbeMcg88.getPendingDivs.call(addressCPp9GQg, {from: accounts[2]});
		const uintBabDtFr = await MoshiachCoinStakingbeMcg88.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintc4ILavQ = await MoshiachCoinStakingbeMcg88.getPendingDivs.call(addressaiWmbjF, {from: "0x0000000000000000000000000000000000000001"});
		const uinteuydjTE = await MoshiachCoinStakingbeMcg88.getNumberOfHolders.call({from: accounts[5]});
		const uintTl7Ukpx = await MoshiachCoinStakingbeMcg88.getPendingDivs.call(addressEhx0S6, {from: accounts[4]});

		await expect(MoshiachCoinStakingbeMcg88.withdraw.call(uintADy8Pwn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghRnHHBD = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintwuR8JS = BigInt("1430")
		const addressAfyepiH = "0x0000000000000000000000000000000000000001"
		const addressS1NnEQ2 = accounts[3]
		const uintmdmAMgG = BigInt("1124")
		const uintJKUECIS = await MoshiachCoinStakinghRnHHBD.getNumberOfHolders.call({from: accounts[3]});
		const addressyDXYJL = await MoshiachCoinStakinghRnHHBD.transferAnyERC20Tokens.call(addressS1NnEQ2, addressAfyepiH, uintwuR8JS, {from: accounts[3]});
		const uintgCdT7m0 = await MoshiachCoinStakinghRnHHBD.deposit.call(uintmdmAMgG, {from: accounts[4]});
		const uintW5E4VCb = await MoshiachCoinStakinghRnHHBD.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintJKUECIS, BigInt("0"))
		await expect(MoshiachCoinStakinghRnHHBD.transferAnyERC20Tokens.call(addressS1NnEQ2, addressAfyepiH, uintwuR8JS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingAqqio3n = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressnpH40zn = accounts[2]
		const addressaxTSTbm = accounts[2]
		const uintP7CfzPV = BigInt("710")
		const addresstJfQkwp = await MoshiachCoinStakingAqqio3n.transferOwnership.call(addressnpH40zn, {from: accounts[0]});
		await MoshiachCoinStakingAqqio3n.claimDivs.call({from: accounts[2]});
		const addressAbHSEa = await MoshiachCoinStakingAqqio3n.transferOwnership.call(addressaxTSTbm, {from: accounts[1]});
		const uintI2rwayl = await MoshiachCoinStakingAqqio3n.deposit.call(uintP7CfzPV, {from: accounts[2]});

		await expect(MoshiachCoinStakingAqqio3n.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})