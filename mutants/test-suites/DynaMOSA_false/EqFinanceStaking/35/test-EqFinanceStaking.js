const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingnUhDzVj = await EqFinanceStaking.new({from: accounts[1]});
		const addressZnQpDxO = accounts[4]
		const uintK2RjXX = BigInt("616")
		const uintyTfTUTU = BigInt("277")
		const addressUOhc6ss = accounts[0]
		const addressgfgaRjq = accounts[2]
		const uint5Gjq6e = await EqFinanceStakingnUhDzVj.getNumberOfHolders.call({from: accounts[5]});
//		const addressqD4kogz = await EqFinanceStakingnUhDzVj.transferOwnership.call(addressZnQpDxO, {from: accounts[4]});
//		const uinthoyy766 = await EqFinanceStakingnUhDzVj.deposit.call(uintK2RjXX, {from: accounts[3]});
//		const addresss7ukZ8p = await EqFinanceStakingnUhDzVj.transferAnyERC20Tokens.call(addressgfgaRjq, addressUOhc6ss, uintyTfTUTU, {from: accounts[4]});

		assert.equal(uint5Gjq6e, BigInt("0"))
		await expect(EqFinanceStakingnUhDzVj.transferOwnership.call(addressZnQpDxO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQHQqqhL = await EqFinanceStaking.new({from: accounts[1]});
		const uintYioSs1I = BigInt("1076")
		const addressz12Fw3M = "0x0000000000000000000000000000000000000001"
		const addresstDS7BD = accounts[4]
		const addresscJTYHcu = accounts[1]
		const uinto7V54J6 = BigInt("1452")
//		await EqFinanceStakingQHQqqhL.onlyOwner.call({from: accounts[4]});
//		const addressAdZdwkP = await EqFinanceStakingQHQqqhL.transferAnyERC20Tokens.call(addresstDS7BD, addressz12Fw3M, uintYioSs1I, {from: accounts[2]});
//		const uintAkgHzOh = await EqFinanceStakingQHQqqhL.getPendingDivs.call(addresscJTYHcu, {from: accounts[4]});
//		const uintL8HoS2 = await EqFinanceStakingQHQqqhL.deposit.call(uinto7V54J6, {from: accounts[3]});

		await expect(EqFinanceStakingQHQqqhL.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvE0vI4A = await EqFinanceStaking.new({from: accounts[2]});
		const uintHh35zi8 = BigInt("1956")
		const uintQBZajLe = BigInt("1201")
		const uintuzLi0IW = BigInt("1799")
		const addressKkqb8Za = accounts[4]
		const addressjD9HgGS = accounts[3]
//		await EqFinanceStakingvE0vI4A.claimDivs.call({from: accounts[3]});
//		const uintGY2ltpE = await EqFinanceStakingvE0vI4A.deposit.call(uintHh35zi8, {from: accounts[4]});
//		const uintqxa9h0F = await EqFinanceStakingvE0vI4A.withdraw.call(uintQBZajLe, {from: accounts[4]});
//		const addressQxHnjwM = await EqFinanceStakingvE0vI4A.transferAnyERC20Tokens.call(addressjD9HgGS, addressKkqb8Za, uintuzLi0IW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingvE0vI4A.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingP7hIiEK = await EqFinanceStaking.new({from: accounts[2]});
		const addressuvh8Gap = accounts[3]
		const uintEGIreKf = BigInt("1329")
		const uintjeyhsPa = BigInt("1622")
		const uintEY78OR = await EqFinanceStakingP7hIiEK.getStakingAndDaoAmount.call({from: accounts[1]});
//		const addresssZogmXK = await EqFinanceStakingP7hIiEK.transferOwnership.call(addressuvh8Gap, {from: accounts[4]});
//		const uint2i525X = await EqFinanceStakingP7hIiEK.deposit.call(uintEGIreKf, {from: accounts[0]});
//		const uintgyv89KA = await EqFinanceStakingP7hIiEK.getNumberOfHolders.call({from: accounts[2]});
//		const uintLq8nO31 = await EqFinanceStakingP7hIiEK.withdraw.call(uintjeyhsPa, {from: accounts[4]});

		assert.equal(uintEY78OR, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingP7hIiEK.transferOwnership.call(addressuvh8Gap, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingddOwiFS = await EqFinanceStaking.new({from: accounts[3]});
		const uintWd0ndJi = BigInt("1172")
		const uintZ5Kkwr0 = BigInt("213")
		const addressj9lUC1t = accounts[2]
//		const uintOFgYm19 = await EqFinanceStakingddOwiFS.withdraw.call(uintWd0ndJi, {from: accounts[2]});
//		const uintHai3lYU = await EqFinanceStakingddOwiFS.deposit.call(uintZ5Kkwr0, {from: "0x0000000000000000000000000000000000000001"});
//		const uintgnLbEba = await EqFinanceStakingddOwiFS.getNumberOfHolders.call({from: accounts[0]});
//		const addressCBURnD0 = await EqFinanceStakingddOwiFS.transferOwnership.call(addressj9lUC1t, {from: accounts[1]});
//		const uintJSv1EZi = await EqFinanceStakingddOwiFS.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(EqFinanceStakingddOwiFS.withdraw.call(uintWd0ndJi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvE0vI4A = await EqFinanceStaking.new({from: accounts[2]});
		const addressFxnl3Jx = accounts[3]
		const addressUAJ6Sbj = accounts[4]
		const addressTB7g1gj = accounts[1]
		const uintENGUTLc = BigInt("1201")
		const uintJNLXn3t = BigInt("1799")
		const addressIw85tsy = accounts[4]
		const addressbrUZrba = accounts[3]
		const uintLt1VCST = await EqFinanceStakingvE0vI4A.getPendingDivs.call(addressFxnl3Jx, {from: accounts[0]});
//		await EqFinanceStakingvE0vI4A.claimDivs.call({from: accounts[3]});
//		const addressY9yoceB = await EqFinanceStakingvE0vI4A.transferOwnership.call(addressUAJ6Sbj, {from: accounts[2]});
//		const uintRzBXzt4 = await EqFinanceStakingvE0vI4A.getPendingDivs.call(addressTB7g1gj, {from: accounts[0]});
		await EqFinanceStakingvE0vI4A.claimDivs.call({from: accounts[3]});
//		const uintqxa9h0F = await EqFinanceStakingvE0vI4A.withdraw.call(uintENGUTLc, {from: accounts[4]});
//		const addressQxHnjwM = await EqFinanceStakingvE0vI4A.transferAnyERC20Tokens.call(addressbrUZrba, addressIw85tsy, uintJNLXn3t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLt1VCST, BigInt("0"))
		await expect(EqFinanceStakingvE0vI4A.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSjB9hWM = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEBBnlUs = accounts[0]
		await EqFinanceStakingSjB9hWM.onlyOwner.call({from: accounts[3]});
		const addressjRIdWJn = await EqFinanceStakingSjB9hWM.transferOwnership.call(addressEBBnlUs, {from: accounts[4]});
		const uintQmY2byd = await EqFinanceStakingSjB9hWM.getStakingAndDaoAmount.call({from: accounts[0]});
		const uint2b68om = await EqFinanceStakingSjB9hWM.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingddOwiFS = await EqFinanceStaking.new({from: accounts[3]});
		const uintxtRNZkH = BigInt("228")
		const addressm8a94yU = accounts[0]
		const addressqICXTy = accounts[1]
		const uintL4IaXsN = BigInt("214")
//		const addresseujlol = await EqFinanceStakingddOwiFS.transferAnyERC20Tokens.call(addressqICXTy, addressm8a94yU, uintxtRNZkH, {from: accounts[3]});
//		const uintHai3lYU = await EqFinanceStakingddOwiFS.deposit.call(uintL4IaXsN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingddOwiFS.transferAnyERC20Tokens.call(addressqICXTy, addressm8a94yU, uintxtRNZkH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingddOwiFS = await EqFinanceStaking.new({from: accounts[3]});
		const uintASodh4J = BigInt("0")
		const addressLUbDprd = accounts[3]
//		await EqFinanceStakingddOwiFS.claimDivs.call({from: accounts[3]});
//		await EqFinanceStakingddOwiFS.claimDivs.call({from: accounts[2]});
//		await EqFinanceStakingddOwiFS.claimDivs.call({from: accounts[5]});
//		const uintWcXHLzw = await EqFinanceStakingddOwiFS.deposit.call(uintASodh4J, {from: accounts[3]});
//		const uintQ90gYQc = await EqFinanceStakingddOwiFS.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintvT833Af = await EqFinanceStakingddOwiFS.getPendingDivs.call(addressLUbDprd, {from: accounts[4]});

		await expect(EqFinanceStakingddOwiFS.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})