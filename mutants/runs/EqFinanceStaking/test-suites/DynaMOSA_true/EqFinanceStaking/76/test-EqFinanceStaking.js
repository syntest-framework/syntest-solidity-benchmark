const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingyDe05WB = await EqFinanceStaking.new({from: accounts[4]});
		const uintjXXafPN = BigInt("329")
		const uintQqPJjWx = await EqFinanceStakingyDe05WB.getNumberOfHolders.call({from: accounts[1]});
		const uintQEqYhED = await EqFinanceStakingyDe05WB.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintyhBXOnB = await EqFinanceStakingyDe05WB.deposit.call(uintjXXafPN, {from: accounts[1]});

		assert.equal(uintQEqYhED, BigInt("3000000000000000000000000"))
		assert.equal(uintQqPJjWx, BigInt("0"))
		await expect(EqFinanceStakingyDe05WB.deposit.call(uintjXXafPN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingkqrIh26 = await EqFinanceStaking.new({from: accounts[1]});
		const addressiesRs8 = accounts[3]
		const uintUqA55xK = BigInt("447")
		const uintp686BYQ = BigInt("208")
		const addressOTi0bfr = accounts[5]
		const addressrbzOSYe = accounts[2]
		const uintutJvW79 = await EqFinanceStakingkqrIh26.getPendingDivs.call(addressiesRs8, {from: accounts[3]});
		const uintJNgeZNF = await EqFinanceStakingkqrIh26.withdraw.call(uintUqA55xK, {from: "0x0000000000000000000000000000000000000001"});
		const uintjxLfS5c = await EqFinanceStakingkqrIh26.deposit.call(uintp686BYQ, {from: accounts[1]});
		const addressAdnmi4 = await EqFinanceStakingkqrIh26.transferOwnership.call(addressOTi0bfr, {from: accounts[2]});
		const addressjXoUE0g = await EqFinanceStakingkqrIh26.transferOwnership.call(addressrbzOSYe, {from: "0x0000000000000000000000000000000000000001"});
		const uintzUXq93w = await EqFinanceStakingkqrIh26.getNumberOfHolders.call({from: accounts[2]});

		assert.equal(uintutJvW79, BigInt("0"))
		await expect(EqFinanceStakingkqrIh26.withdraw.call(uintUqA55xK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKI1Q8jX = await EqFinanceStaking.new({from: accounts[4]});
		const addressR1jGJXr = accounts[2]
		const uintB9bsGAB = BigInt("65")
		const uintFbznBWL = await EqFinanceStakingKI1Q8jX.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingKI1Q8jX.claimDivs.call({from: accounts[3]});
		await EqFinanceStakingKI1Q8jX.claimDivs.call({from: accounts[1]});
		const uint0vv71W = await EqFinanceStakingKI1Q8jX.getPendingDivs.call(addressR1jGJXr, {from: accounts[0]});
		const uintQreFeGz = await EqFinanceStakingKI1Q8jX.getNumberOfHolders.call({from: accounts[0]});
		const uintnJoQ6XW = await EqFinanceStakingKI1Q8jX.deposit.call(uintB9bsGAB, {from: accounts[5]});

		assert.equal(uintFbznBWL, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingKI1Q8jX.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVU3S3DQ = await EqFinanceStaking.new({from: accounts[4]});
		const uintfWpSI7g = BigInt("1028")
		const addressdiD9N8X = accounts[2]
		const addressZc5WfC = accounts[4]
		const uintH3d3V05 = BigInt("399")
		const uint5vK3oB = await EqFinanceStakingVU3S3DQ.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressVCoyS1A = await EqFinanceStakingVU3S3DQ.transferAnyERC20Tokens.call(addressZc5WfC, addressdiD9N8X, uintfWpSI7g, {from: accounts[4]});
		const uintxqMbunS = await EqFinanceStakingVU3S3DQ.withdraw.call(uintH3d3V05, {from: accounts[1]});
		const uintBbyEC5a = await EqFinanceStakingVU3S3DQ.getStakingAndDaoAmount.call({from: accounts[4]});

		assert.equal(uint5vK3oB, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingVU3S3DQ.transferAnyERC20Tokens.call(addressZc5WfC, addressdiD9N8X, uintfWpSI7g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingM4AV2W = await EqFinanceStaking.new({from: accounts[2]});
		const uintLoKiF3 = BigInt("1279")
		const address18sWGM = accounts[5]
		await EqFinanceStakingM4AV2W.onlyOwner.call({from: accounts[0]});
		const uintjHmgxzD = await EqFinanceStakingM4AV2W.deposit.call(uintLoKiF3, {from: accounts[1]});
		const addressgMYfNdE = await EqFinanceStakingM4AV2W.transferOwnership.call(address18sWGM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingM4AV2W.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakings3pmpU = await EqFinanceStaking.new({from: accounts[0]});
		const addressjGonbbg = accounts[0]
		const addressS0iCHv1 = accounts[0]
		const addressBhZtEhj = accounts[5]
		const uintgFWQPN = await EqFinanceStakings3pmpU.getPendingDivs.call(addressjGonbbg, {from: accounts[4]});
		const addressFqTpazT = await EqFinanceStakings3pmpU.transferOwnership.call(addressS0iCHv1, {from: accounts[0]});
		const uintL20k1Z = await EqFinanceStakings3pmpU.getPendingDivs.call(addressBhZtEhj, {from: accounts[2]});

		assert.equal(uintL20k1Z, BigInt("0"))
		assert.equal(uintgFWQPN, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqifJWqf = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOd0w6n = accounts[2]
		const uintPHxKsSH = BigInt("1309")
		const uintfWAIlEx = await EqFinanceStakingqifJWqf.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintzgrzLx = await EqFinanceStakingqifJWqf.getStakingAndDaoAmount.call({from: accounts[4]});
		await EqFinanceStakingqifJWqf.onlyOwner.call({from: accounts[0]});
		const uintzNdNKvN = await EqFinanceStakingqifJWqf.getPendingDivs.call(addressOd0w6n, {from: accounts[3]});
		const uintBfVd9nL = await EqFinanceStakingqifJWqf.deposit.call(uintPHxKsSH, {from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKpdhHF = await EqFinanceStaking.new({from: accounts[4]});
		const uintxaM74XS = BigInt("0")
		const uintEXFZUYv = BigInt("270")
		const uintAv6n5ZC = BigInt("727")
		const addresspo9CEny = accounts[0]
		const addressT5tsMOo = accounts[1]
		const uintPcKDgOy = BigInt("1903")
		const addressBwwr7Pt = accounts[5]
		const uintf3JEWts = BigInt("125")
		const uinta1SctD = BigInt("1442")
		const uintWxh3mPu = BigInt("1595")
		const uintNKETg8q = await EqFinanceStakingKpdhHF.getNumberOfHolders.call({from: accounts[1]});
		const uintdP4MoHX = await EqFinanceStakingKpdhHF.deposit.call(uintxaM74XS, {from: accounts[4]});
		const uint2TJiwT = await EqFinanceStakingKpdhHF.deposit.call(uintEXFZUYv, {from: accounts[0]});
		const uintghyg4Y4 = await EqFinanceStakingKpdhHF.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintq2zGv0j = await EqFinanceStakingKpdhHF.getStakingAndDaoAmount.call({from: accounts[2]});
		await EqFinanceStakingKpdhHF.claimDivs.call({from: accounts[2]});
		const uintmTpCJx = await EqFinanceStakingKpdhHF.withdraw.call(uintAv6n5ZC, {from: accounts[1]});
		const uintQ2vfcQ3 = await EqFinanceStakingKpdhHF.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingKpdhHF.claimDivs.call({from: accounts[0]});
		const addresseD5yE6O = await EqFinanceStakingKpdhHF.transferOwnership.call(addresspo9CEny, {from: accounts[1]});
		const uintXT89nR1 = await EqFinanceStakingKpdhHF.getPendingDivs.call(addressT5tsMOo, {from: accounts[2]});
		const uintmVZXpi = await EqFinanceStakingKpdhHF.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintEFS0imb = await EqFinanceStakingKpdhHF.withdraw.call(uintPcKDgOy, {from: accounts[1]});
		const uintgdXRGqP = await EqFinanceStakingKpdhHF.getPendingDivs.call(addressBwwr7Pt, {from: accounts[3]});
		const uintFDdyCXN = await EqFinanceStakingKpdhHF.deposit.call(uintf3JEWts, {from: accounts[2]});
		const uintvdia8nP = await EqFinanceStakingKpdhHF.deposit.call(uinta1SctD, {from: "0x0000000000000000000000000000000000000001"});
		const uintXD9KcMb = await EqFinanceStakingKpdhHF.withdraw.call(uintWxh3mPu, {from: accounts[2]});

		assert.equal(uintNKETg8q, BigInt("0"))
		await expect(EqFinanceStakingKpdhHF.deposit.call(uintxaM74XS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})