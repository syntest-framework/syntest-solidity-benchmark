const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxS697g = await MoshiachCoinStaking.new({from: accounts[1]});
		await MoshiachCoinStakingxS697g.onlyOwner.call({from: accounts[4]});
		await MoshiachCoinStakingxS697g.claimDivs.call({from: accounts[0]});
		const uintyssoaHA = await MoshiachCoinStakingxS697g.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingxS697g.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingeAgXmQ0 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintSwUtmDv = BigInt("751")
		const uintCbLQGZ = await MoshiachCoinStakingeAgXmQ0.getStakingAndDaoAmount.call({from: accounts[4]});
		await MoshiachCoinStakingeAgXmQ0.claimDivs.call({from: accounts[4]});
		const uintTOKeXcm = await MoshiachCoinStakingeAgXmQ0.deposit.call(uintSwUtmDv, {from: accounts[2]});

		assert.equal(uintCbLQGZ, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingeAgXmQ0.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinguNQAJOF = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintB22q5Gr = BigInt("67")
		const uintnt3ycXN = BigInt("177")
		const uintktWPLgv = await MoshiachCoinStakinguNQAJOF.withdraw.call(uintB22q5Gr, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakinguNQAJOF.claimDivs.call({from: accounts[0]});
		const uintUgOifjl = await MoshiachCoinStakinguNQAJOF.withdraw.call(uintnt3ycXN, {from: accounts[4]});

		await expect(MoshiachCoinStakinguNQAJOF.withdraw.call(uintB22q5Gr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxVRrYd2 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressImr8Idj = accounts[1]
		const addressarfsTf = accounts[1]
		const uintKqfHk5R = await MoshiachCoinStakingxVRrYd2.getPendingDivs.call(addressImr8Idj, {from: accounts[1]});
		const uintkH8StIi = await MoshiachCoinStakingxVRrYd2.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingxVRrYd2.claimDivs.call({from: accounts[4]});
		const uintEhE3SOC = await MoshiachCoinStakingxVRrYd2.getPendingDivs.call(addressarfsTf, {from: accounts[2]});

		assert.equal(uintKqfHk5R, BigInt("0"))
		assert.equal(uintkH8StIi, BigInt("0"))
		await expect(MoshiachCoinStakingxVRrYd2.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingsgiljo = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintHAQ1XwQ = BigInt("1917")
		const addressRfbNZ9c = accounts[1]
		const addressC8Ouhuv = accounts[3]
		const uintAGDiejQ = BigInt("1926")
		const uintHI038ed = BigInt("1705")
		const addressWw3wlNi = accounts[3]
		const addressQiV8VJ1 = await MoshiachCoinStakingsgiljo.transferAnyERC20Tokens.call(addressC8Ouhuv, addressRfbNZ9c, uintHAQ1XwQ, {from: accounts[0]});
		await MoshiachCoinStakingsgiljo.claimDivs.call({from: accounts[0]});
		const uintUvFs3NV = await MoshiachCoinStakingsgiljo.withdraw.call(uintAGDiejQ, {from: accounts[5]});
		const uintNt07CLY = await MoshiachCoinStakingsgiljo.withdraw.call(uintHI038ed, {from: accounts[4]});
		const addresstBz0Lr9 = await MoshiachCoinStakingsgiljo.transferOwnership.call(addressWw3wlNi, {from: accounts[0]});

		await expect(MoshiachCoinStakingsgiljo.transferAnyERC20Tokens.call(addressC8Ouhuv, addressRfbNZ9c, uintHAQ1XwQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqDvbKj = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressOzhuEO = accounts[0]
		const uintf7FRqYx = BigInt("505")
		const addresseXov5XA = await MoshiachCoinStakingqDvbKj.transferOwnership.call(addressOzhuEO, {from: accounts[1]});
		const uintxu1xV4l = await MoshiachCoinStakingqDvbKj.withdraw.call(uintf7FRqYx, {from: accounts[4]});
		const uintAsU7bYu = await MoshiachCoinStakingqDvbKj.getStakingAndDaoAmount.call({from: accounts[5]});

		await expect(MoshiachCoinStakingqDvbKj.withdraw.call(uintf7FRqYx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxobQnBQ = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAOssi3r = BigInt("1817")
		const uintmBoqXUb = await MoshiachCoinStakingxobQnBQ.deposit.call(uintAOssi3r, {from: accounts[5]});
		const uint81cTB1 = await MoshiachCoinStakingxobQnBQ.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingxobQnBQ.claimDivs.call({from: accounts[3]});
		await MoshiachCoinStakingxobQnBQ.onlyOwner.call({from: accounts[5]});
		await MoshiachCoinStakingxobQnBQ.claimDivs.call({from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingdqXkbr = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintVzvU25v = BigInt("0")
		const addressr3WWnit = accounts[0]
		const uintWd27k5G = BigInt("300")
		const uinturPB2CM = BigInt("1516")
		const address7LuNs3 = accounts[4]
		const addressLeRIvN = accounts[4]
		const uintAvhHGXu = await MoshiachCoinStakingdqXkbr.getNumberOfHolders.call({from: accounts[3]});
		const uintFDSkSCn = await MoshiachCoinStakingdqXkbr.deposit.call(uintVzvU25v, {from: accounts[3]});
		const uintRaIpHRF = await MoshiachCoinStakingdqXkbr.getPendingDivs.call(addressr3WWnit, {from: accounts[1]});
		const uintsDJ8ITB = await MoshiachCoinStakingdqXkbr.withdraw.call(uintWd27k5G, {from: "0x0000000000000000000000000000000000000001"});
		const addressatDFyud = await MoshiachCoinStakingdqXkbr.transferAnyERC20Tokens.call(addressLeRIvN, address7LuNs3, uinturPB2CM, {from: accounts[0]});

		assert.equal(uintAvhHGXu, BigInt("0"))
		await expect(MoshiachCoinStakingdqXkbr.deposit.call(uintVzvU25v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})