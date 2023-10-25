const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyZhFvhK = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintb5rS1oZ = BigInt("497")
		const uintsKEWmUu = await MoshiachCoinStakingyZhFvhK.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintSFfobr = await MoshiachCoinStakingyZhFvhK.getNumberOfHolders.call({from: accounts[3]});
		await MoshiachCoinStakingyZhFvhK.onlyOwner.call({from: accounts[4]});
		await MoshiachCoinStakingyZhFvhK.claimDivs.call({from: accounts[2]});
		const uintmuoKcdW = await MoshiachCoinStakingyZhFvhK.deposit.call(uintb5rS1oZ, {from: accounts[0]});

		assert.equal(uintSFfobr, BigInt("0"))
		assert.equal(uintsKEWmUu, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingyZhFvhK.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkty3w6A = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintK0mvyOG = BigInt("1272")
		const uintMJB6En = BigInt("2006")
		const uintyCiemyO = BigInt("1757")
		const uintcIzkgoU = await MoshiachCoinStakingkty3w6A.withdraw.call(uintK0mvyOG, {from: accounts[5]});
		const uintatCSMxL = await MoshiachCoinStakingkty3w6A.deposit.call(uintMJB6En, {from: accounts[3]});
		const uintGlbElQW = await MoshiachCoinStakingkty3w6A.deposit.call(uintyCiemyO, {from: accounts[5]});

		await expect(MoshiachCoinStakingkty3w6A.withdraw.call(uintK0mvyOG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking6uAw4B = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintnYDuV8e = BigInt("1739")
		const addressLxWF3q = accounts[4]
		const addresshmeCnE9 = accounts[1]
		const uintXZSJ1uE = await MoshiachCoinStaking6uAw4B.deposit.call(uintnYDuV8e, {from: accounts[5]});
		const addressPgqcupO = await MoshiachCoinStaking6uAw4B.transferOwnership.call(addressLxWF3q, {from: accounts[4]});
		const addressSSohkBz = await MoshiachCoinStaking6uAw4B.transferOwnership.call(addresshmeCnE9, {from: accounts[2]});
		const uintJwzuVSy = await MoshiachCoinStaking6uAw4B.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStaking6uAw4B.deposit.call(uintnYDuV8e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfhWYjrF = await MoshiachCoinStaking.new({from: accounts[2]});
		const addresszHgQJQ = accounts[4]
		const addressFefMov = accounts[1]
		const addressY0ekmAp = accounts[3]
		const uintzYTKheI = BigInt("632")
		const uintz5ehZ4v = await MoshiachCoinStakingfhWYjrF.getPendingDivs.call(addresszHgQJQ, {from: accounts[1]});
		const addressxD4ykvG = await MoshiachCoinStakingfhWYjrF.transferOwnership.call(addressFefMov, {from: accounts[2]});
		const uintzdASmv0 = await MoshiachCoinStakingfhWYjrF.getPendingDivs.call(addressY0ekmAp, {from: accounts[2]});
		const uintsigVsi = await MoshiachCoinStakingfhWYjrF.withdraw.call(uintzYTKheI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintz5ehZ4v, BigInt("0"))
		assert.equal(uintzdASmv0, BigInt("0"))
		await expect(MoshiachCoinStakingfhWYjrF.withdraw.call(uintzYTKheI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQ8Iq3d = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintXrOsUBi = BigInt("1085")
		const uintd1fXIUt = BigInt("91")
		const uintb7s8WWd = BigInt("200")
		const addresspATQeas = accounts[4]
		const addressmYdM95 = accounts[2]
		const uintotDuisG = BigInt("881")
		await MoshiachCoinStakingQ8Iq3d.claimDivs.call({from: accounts[4]});
		const uintXtwrEl = await MoshiachCoinStakingQ8Iq3d.getStakingAndDaoAmount.call({from: accounts[2]});
		const uinttDbczD6 = await MoshiachCoinStakingQ8Iq3d.withdraw.call(uintXrOsUBi, {from: accounts[3]});
		const uintRDQplnp = await MoshiachCoinStakingQ8Iq3d.deposit.call(uintd1fXIUt, {from: "0x0000000000000000000000000000000000000001"});
		const addressf9ii6vL = await MoshiachCoinStakingQ8Iq3d.transferAnyERC20Tokens.call(addressmYdM95, addresspATQeas, uintb7s8WWd, {from: accounts[3]});
		const uintgxmCwIQ = await MoshiachCoinStakingQ8Iq3d.deposit.call(uintotDuisG, {from: accounts[0]});

		await expect(MoshiachCoinStakingQ8Iq3d.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYc3t3ku = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintDTZHrfy = BigInt("222")
		const addressoheTWD = accounts[3]
		const addressQhjtTwT = accounts[2]
		const uintrqif1b6 = BigInt("1108")
		const uintYBUlUE6 = BigInt("908")
		const uinthbwe3C = BigInt("312")
		const address0X0fOP = accounts[1]
		const addressYH4lMU = accounts[5]
		const addressJdOjXC6 = await MoshiachCoinStakingYc3t3ku.transferAnyERC20Tokens.call(addressQhjtTwT, addressoheTWD, uintDTZHrfy, {from: accounts[1]});
		const uintsMd5fck = await MoshiachCoinStakingYc3t3ku.withdraw.call(uintrqif1b6, {from: accounts[2]});
		const uintTaphhmY = await MoshiachCoinStakingYc3t3ku.deposit.call(uintYBUlUE6, {from: accounts[2]});
		const uintaeNu3mN = await MoshiachCoinStakingYc3t3ku.getNumberOfHolders.call({from: accounts[1]});
		const addressJ3UiXdI = await MoshiachCoinStakingYc3t3ku.transferAnyERC20Tokens.call(addressYH4lMU, address0X0fOP, uinthbwe3C, {from: accounts[2]});

		await expect(MoshiachCoinStakingYc3t3ku.transferAnyERC20Tokens.call(addressQhjtTwT, addressoheTWD, uintDTZHrfy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJAN3JKR = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintC34oYW5 = await MoshiachCoinStakingJAN3JKR.getStakingAndDaoAmount.call({from: accounts[4]});
		await MoshiachCoinStakingJAN3JKR.claimDivs.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcbrbYoD = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintWxfWxAe = BigInt("0")
		const addresso4JF7SP = accounts[1]
		const uintcDVmGGP = await MoshiachCoinStakingcbrbYoD.deposit.call(uintWxfWxAe, {from: accounts[2]});
		const addressl7yFVqZ = await MoshiachCoinStakingcbrbYoD.transferOwnership.call(addresso4JF7SP, {from: accounts[1]});

		await expect(MoshiachCoinStakingcbrbYoD.deposit.call(uintWxfWxAe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})