const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKeuvEl = await EqFinanceStaking.new({from: accounts[0]});
		const addressUQgvZiP = accounts[4]
		const uintTH14dEh = BigInt("246")
		const addressgVJFSi8 = accounts[2]
		const addressOsZODD7 = accounts[0]
		const uintOvMsOep = BigInt("1602")
		const addressqfljrxq = accounts[0]
		const uintl86bGub = await EqFinanceStakingKeuvEl.getPendingDivs.call(addressUQgvZiP, {from: accounts[3]});
		const uintbKEb6x2 = await EqFinanceStakingKeuvEl.deposit.call(uintTH14dEh, {from: accounts[0]});
		const addressuDhvnTP = await EqFinanceStakingKeuvEl.transferOwnership.call(addressgVJFSi8, {from: accounts[1]});
		const address8IuciI = await EqFinanceStakingKeuvEl.transferOwnership.call(addressOsZODD7, {from: accounts[2]});
		const uintTLmMBc = await EqFinanceStakingKeuvEl.withdraw.call(uintOvMsOep, {from: accounts[1]});
		const addressGX6jbOU = await EqFinanceStakingKeuvEl.transferOwnership.call(addressqfljrxq, {from: accounts[4]});

		assert.equal(uintl86bGub, BigInt("0"))
		await expect(EqFinanceStakingKeuvEl.deposit.call(uintTH14dEh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinguq1TLAO = await EqFinanceStaking.new({from: accounts[1]});
		const uinti0yZTea = BigInt("1878")
		await EqFinanceStakinguq1TLAO.onlyOwner.call({from: accounts[2]});
		const uint1NIb6X = await EqFinanceStakinguq1TLAO.deposit.call(uinti0yZTea, {from: accounts[5]});
		await EqFinanceStakinguq1TLAO.onlyOwner.call({from: accounts[0]});

		await expect(EqFinanceStakinguq1TLAO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcDj4UFo = await EqFinanceStaking.new({from: accounts[1]});
		const uintqrgonxn = BigInt("609")
		const uintBpMRwK6 = BigInt("1257")
		const addressDvgq9iL = accounts[1]
		const addressWLGQbLP = accounts[4]
		const uintG5doKuE = await EqFinanceStakingcDj4UFo.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintYP9uoXT = await EqFinanceStakingcDj4UFo.deposit.call(uintqrgonxn, {from: accounts[3]});
		const addressmv7IOX = await EqFinanceStakingcDj4UFo.transferAnyERC20Tokens.call(addressWLGQbLP, addressDvgq9iL, uintBpMRwK6, {from: accounts[0]});

		assert.equal(uintG5doKuE, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingcDj4UFo.deposit.call(uintqrgonxn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxUYttA = await EqFinanceStaking.new({from: accounts[2]});
		const uintW869XTl = BigInt("2007")
		const addressKkDI57A = accounts[0]
		const addressATnRXiW = "0x0000000000000000000000000000000000000001"
		const addressS28JxFN = accounts[0]
		const uintBjyVE9B = BigInt("923")
		const addressH6PpEK = accounts[3]
		const addressmsycM65 = accounts[5]
		const addresszlYjNzJ = await EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addressATnRXiW, addressKkDI57A, uintW869XTl, {from: accounts[2]});
		await EqFinanceStakingxUYttA.claimDivs.call({from: accounts[1]});
		const addresshkQcYFU = await EqFinanceStakingxUYttA.transferOwnership.call(addressS28JxFN, {from: accounts[1]});
		const uintmncyiFm = await EqFinanceStakingxUYttA.getNumberOfHolders.call({from: accounts[1]});
		const addressSMwnOr = await EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addressmsycM65, addressH6PpEK, uintBjyVE9B, {from: accounts[2]});

		await expect(EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addressATnRXiW, addressKkDI57A, uintW869XTl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingPlM2g0V = await EqFinanceStaking.new({from: accounts[2]});
		const uinta6TY7d = BigInt("1152")
		const addressepBjE7 = accounts[1]
		const uintelOFPwv = await EqFinanceStakingPlM2g0V.getNumberOfHolders.call({from: accounts[2]});
		const uintnNyz1j6 = await EqFinanceStakingPlM2g0V.deposit.call(uinta6TY7d, {from: accounts[2]});
		const uintLZWzlKZ = await EqFinanceStakingPlM2g0V.getPendingDivs.call(addressepBjE7, {from: accounts[2]});

		assert.equal(uintelOFPwv, BigInt("0"))
		await expect(EqFinanceStakingPlM2g0V.deposit.call(uinta6TY7d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKjaNz96 = await EqFinanceStaking.new({from: accounts[5]});
		const addressb2FPa8U = accounts[5]
		const uintdfMhMP9 = BigInt("1822")
		const uintsyM8ZUa = BigInt("131")
		const addressvkpqeA = accounts[1]
		const addresspM7P17d = "0x0000000000000000000000000000000000000001"
		const uintQPMdRcL = BigInt("1802")
		const uintm0KtYNN = await EqFinanceStakingKjaNz96.getPendingDivs.call(addressb2FPa8U, {from: accounts[2]});
		const uintnrXpo9 = await EqFinanceStakingKjaNz96.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintCfiDomV = await EqFinanceStakingKjaNz96.withdraw.call(uintdfMhMP9, {from: accounts[3]});
		await EqFinanceStakingKjaNz96.claimDivs.call({from: accounts[3]});
		const addressixOaW9o = await EqFinanceStakingKjaNz96.transferAnyERC20Tokens.call(addresspM7P17d, addressvkpqeA, uintsyM8ZUa, {from: "0x0000000000000000000000000000000000000001"});
		const uintM7Tu4Qt = await EqFinanceStakingKjaNz96.withdraw.call(uintQPMdRcL, {from: accounts[1]});

		assert.equal(uintm0KtYNN, BigInt("0"))
		assert.equal(uintnrXpo9, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingKjaNz96.withdraw.call(uintdfMhMP9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingRApndQd = await EqFinanceStaking.new({from: accounts[2]});
		const addressqQJEtbc = "0x0000000000000000000000000000000000000001"
		const addressz3TcKv = accounts[3]
		const uinto3tEawr = await EqFinanceStakingRApndQd.getNumberOfHolders.call({from: accounts[0]});
		await EqFinanceStakingRApndQd.claimDivs.call({from: accounts[4]});
		const addressVZqC1u = await EqFinanceStakingRApndQd.transferOwnership.call(addressqQJEtbc, {from: accounts[0]});
		await EqFinanceStakingRApndQd.claimDivs.call({from: accounts[4]});
		const uinth5OYIiQ = await EqFinanceStakingRApndQd.getPendingDivs.call(addressz3TcKv, {from: accounts[0]});

		assert.equal(uinto3tEawr, BigInt("0"))
		await expect(EqFinanceStakingRApndQd.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxUYttA = await EqFinanceStaking.new({from: accounts[2]});
		const addressrfGq3NG = accounts[2]
		const uintFDV0Do0 = BigInt("2007")
		const addresspj22901 = accounts[0]
		const addresslXs2GNq = "0x0000000000000000000000000000000000000001"
		const addressLpyQbHg = accounts[0]
		const uintnjHOo2O = BigInt("906")
		const addressPsyeK0N = accounts[4]
		const addressY42HUM = accounts[5]
		const addressrIE8dop = await EqFinanceStakingxUYttA.transferOwnership.call(addressrfGq3NG, {from: accounts[2]});
		const addresszlYjNzJ = await EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addresslXs2GNq, addresspj22901, uintFDV0Do0, {from: accounts[2]});
		await EqFinanceStakingxUYttA.claimDivs.call({from: accounts[1]});
		const addresshkQcYFU = await EqFinanceStakingxUYttA.transferOwnership.call(addressLpyQbHg, {from: accounts[1]});
		const addressSMwnOr = await EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addressY42HUM, addressPsyeK0N, uintnjHOo2O, {from: accounts[2]});

		await expect(EqFinanceStakingxUYttA.transferAnyERC20Tokens.call(addresslXs2GNq, addresspj22901, uintFDV0Do0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingtPrngc = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQpSGjsG = BigInt("1273")
		const uintuBTygMR = await EqFinanceStakingtPrngc.getStakingAndDaoAmount.call({from: accounts[0]});
		await EqFinanceStakingtPrngc.claimDivs.call({from: accounts[2]});
		const uintNMyImDG = await EqFinanceStakingtPrngc.withdraw.call(uintQpSGjsG, {from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingmCqklW5 = await EqFinanceStaking.new({from: accounts[2]});
		const uintZB0p80v = BigInt("0")
		const addressjD7pO6 = accounts[3]
		const uintVBukqg7 = BigInt("1780")
		const addressD71R05I = accounts[3]
		const addressT7bPtS8 = "0x0000000000000000000000000000000000000001"
		const uintGTSflzF = BigInt("886")
		const addressGOD5TaB = accounts[2]
		const addressoSAXQND = accounts[4]
		const addressgyxLITI = accounts[2]
		await EqFinanceStakingmCqklW5.claimDivs.call({from: accounts[5]});
		const uinte4KP2HZ = await EqFinanceStakingmCqklW5.deposit.call(uintZB0p80v, {from: accounts[5]});
		const uinthgb62ks = await EqFinanceStakingmCqklW5.getPendingDivs.call(addressjD7pO6, {from: accounts[3]});
		const addressd9D9Wxw = await EqFinanceStakingmCqklW5.transferAnyERC20Tokens.call(addressT7bPtS8, addressD71R05I, uintVBukqg7, {from: accounts[0]});
		const uintuBdqq7x = await EqFinanceStakingmCqklW5.deposit.call(uintGTSflzF, {from: accounts[0]});
		const addressW4RZRQv = await EqFinanceStakingmCqklW5.transferOwnership.call(addressGOD5TaB, {from: accounts[0]});
		const uintm74fzbq = await EqFinanceStakingmCqklW5.getPendingDivs.call(addressoSAXQND, {from: accounts[0]});
		const addressywT92By = await EqFinanceStakingmCqklW5.transferOwnership.call(addressgyxLITI, {from: accounts[4]});

		await expect(EqFinanceStakingmCqklW5.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})