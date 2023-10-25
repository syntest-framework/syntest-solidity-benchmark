const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingx0QzKXq = await EqFinanceStaking.new({from: accounts[1]});
		const uintZCQSGul = BigInt("1339")
		const uintVPSsEm4 = BigInt("11")
		const addressAhXuIRJ = accounts[3]
		const addressWmmPrz8 = accounts[1]
		const addressWhFfIGk = accounts[3]
//		const uintM5lDSgI = await EqFinanceStakingx0QzKXq.deposit.call(uintZCQSGul, {from: accounts[2]});
//		const addresszX1mHli = await EqFinanceStakingx0QzKXq.transferAnyERC20Tokens.call(addressWmmPrz8, addressAhXuIRJ, uintVPSsEm4, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyWbaep = await EqFinanceStakingx0QzKXq.getPendingDivs.call(addressWhFfIGk, {from: accounts[3]});

		await expect(EqFinanceStakingx0QzKXq.deposit.call(uintZCQSGul, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking3DIgAJ = await EqFinanceStaking.new({from: accounts[4]});
		const address32p14K = accounts[2]
		const uintlksy7fl = await EqFinanceStaking3DIgAJ.getPendingDivs.call(address32p14K, {from: accounts[3]});
		const uinthFRCZgA = await EqFinanceStaking3DIgAJ.getNumberOfHolders.call({from: accounts[5]});
//		await EqFinanceStaking3DIgAJ.onlyOwner.call({from: accounts[3]});

		assert.equal(uinthFRCZgA, BigInt("0"))
		assert.equal(uintlksy7fl, BigInt("0"))
		await expect(EqFinanceStaking3DIgAJ.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvfyXh5D = await EqFinanceStaking.new({from: accounts[2]});
//		await EqFinanceStakingvfyXh5D.claimDivs.call({from: accounts[0]});
//		const uinta7ZdRgF = await EqFinanceStakingvfyXh5D.getNumberOfHolders.call({from: accounts[0]});

		await expect(EqFinanceStakingvfyXh5D.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVi0LZRw = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSfs1YxL = accounts[0]
		const uintIbUNwS = BigInt("1218")
		const addressjlGtWXs = "0x0000000000000000000000000000000000000001"
		const addressPHCAuy = accounts[2]
		const addressys9b8Hf = accounts[1]
		await EqFinanceStakingVi0LZRw.onlyOwner.call({from: accounts[3]});
		const uintZuyZkOi = await EqFinanceStakingVi0LZRw.getPendingDivs.call(addressSfs1YxL, {from: accounts[4]});
		await EqFinanceStakingVi0LZRw.claimDivs.call({from: accounts[2]});
		const addressHxDiqSx = await EqFinanceStakingVi0LZRw.transferAnyERC20Tokens.call(addressPHCAuy, addressjlGtWXs, uintIbUNwS, {from: accounts[2]});
		const addressZFxRDOf = await EqFinanceStakingVi0LZRw.transferOwnership.call(addressys9b8Hf, {from: accounts[0]});
		const uintDpTZ9pZ = await EqFinanceStakingVi0LZRw.getNumberOfHolders.call({from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingf6MCm4M = await EqFinanceStaking.new({from: accounts[3]});
		const addressCf4DS7U = accounts[0]
		const uintW2S5Ap5 = BigInt("1981")
		const uinttlHzSmv = BigInt("339")
		const addressaX2hADe = await EqFinanceStakingf6MCm4M.transferOwnership.call(addressCf4DS7U, {from: accounts[3]});
		const uintmLNldtN = await EqFinanceStakingf6MCm4M.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintdmix5va = await EqFinanceStakingf6MCm4M.withdraw.call(uintW2S5Ap5, {from: accounts[3]});
//		const uintagTzKNo = await EqFinanceStakingf6MCm4M.deposit.call(uinttlHzSmv, {from: accounts[1]});

		assert.equal(uintmLNldtN, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingf6MCm4M.withdraw.call(uintW2S5Ap5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvfyXh5D = await EqFinanceStaking.new({from: accounts[2]});
		const uintP5NzlZV = BigInt("1954")
		const addresse4HzPEx = accounts[3]
		const addressSTMeYa9 = accounts[1]
//		await EqFinanceStakingvfyXh5D.claimDivs.call({from: accounts[0]});
//		const addressoBmDbOA = await EqFinanceStakingvfyXh5D.transferAnyERC20Tokens.call(addressSTMeYa9, addresse4HzPEx, uintP5NzlZV, {from: accounts[2]});
//		const uinta7ZdRgF = await EqFinanceStakingvfyXh5D.getNumberOfHolders.call({from: accounts[0]});

		await expect(EqFinanceStakingvfyXh5D.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})