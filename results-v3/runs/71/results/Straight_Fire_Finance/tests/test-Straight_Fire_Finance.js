const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceYgHCQsd = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintcTyv3Fd = BigInt("451")
		const addressog0R8Mn = "0x0000000000000000000000000000000000000001"
		const addresslkrezQu = accounts[2]
		const uintEiyhvjf = BigInt("1983")
		const addressMoR2nqh = accounts[4]
		const uintgp2F4VP = BigInt("1871")
		const addressrTQlWu = accounts[3]
		const uintTZYfuGI = BigInt("1539")
		const addresseRPYf8S = accounts[5]
		const addressQLC3ufq = accounts[0]
		const addressHVVD67R = accounts[0]
		const boolQfWZOzr = await Straight_Fire_FinanceYgHCQsd.transferFrom.call(addresslkrezQu, addressog0R8Mn, uintcTyv3Fd, {from: "0x0000000000000000000000000000000000000001"});
		const booldJDyms1 = await Straight_Fire_FinanceYgHCQsd.transfer.call(addressMoR2nqh, uintEiyhvjf, {from: accounts[1]});
		const boolNiWJhqV = await Straight_Fire_FinanceYgHCQsd.transfer.call(addressrTQlWu, uintgp2F4VP, {from: accounts[1]});
		const boolv2jKOkQ = await Straight_Fire_FinanceYgHCQsd.transfer.call(addresseRPYf8S, uintTZYfuGI, {from: "0x0000000000000000000000000000000000000001"});
		const uintbyBT6eK = await Straight_Fire_FinanceYgHCQsd.allowance.call(addressHVVD67R, addressQLC3ufq, {from: accounts[1]});

		assert.equal(boolNiWJhqV, false)
		assert.equal(boolQfWZOzr, false)
		assert.equal(booldJDyms1, false)
		assert.equal(boolv2jKOkQ, false)
		assert.equal(uintbyBT6eK, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financevb9CEsn = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintfQxxvxr = BigInt("1708")
		const addressMbyhKtC = accounts[1]
		const addressqQhiUi5 = accounts[3]
		const addressx2fr0yG = accounts[0]
		const addressCXBwbLS = accounts[3]
		const addressvjp6sE = accounts[1]
		const addressqf9gMt = accounts[0]
		const boollN7IItv = await Straight_Fire_Financevb9CEsn.transferFrom.call(addressqQhiUi5, addressMbyhKtC, uintfQxxvxr, {from: accounts[3]});
		const uintfxjVxoI = await Straight_Fire_Financevb9CEsn.allowance.call(addressCXBwbLS, addressx2fr0yG, {from: accounts[2]});
		const uint256V2KvOQY = await Straight_Fire_Financevb9CEsn.balanceOf.call(addressvjp6sE, {from: accounts[4]});
		const uint256gAIvhb = await Straight_Fire_Financevb9CEsn.balanceOf.call(addressqf9gMt, {from: accounts[3]});

		assert.equal(boollN7IItv, false)
		assert.equal(uint256V2KvOQY, BigInt("0"))
		assert.equal(uint256gAIvhb, BigInt("0"))
		assert.equal(uintfxjVxoI, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceYmBXLER = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintpupPAS1 = BigInt("1816")
		const addresssjq1HYf = "0x0000000000000000000000000000000000000001"
		const addressz3Yk5IB = accounts[4]
		const addressPhUzRtc = accounts[3]
		const addressEI32kG = accounts[2]
		const addressARofXFy = accounts[3]
		const uintbMuoPgy = BigInt("744")
		const addressQAXurvy = accounts[4]
		const addressdvCerQJ = accounts[4]
		const uintnR8Ihh = BigInt("1898")
		const addressFuJP3Mq = accounts[4]
		const addressE90GwRY = accounts[5]
		const boolrCXVKAq = await Straight_Fire_FinanceYmBXLER.transferFrom.call(addressz3Yk5IB, addresssjq1HYf, uintpupPAS1, {from: accounts[5]});
		const uint256Slrn4Os = await Straight_Fire_FinanceYmBXLER.balanceOf.call(addressPhUzRtc, {from: accounts[1]});
		const uintNBTeEq3 = await Straight_Fire_FinanceYmBXLER.allowance.call(addressARofXFy, addressEI32kG, {from: accounts[2]});
		const uint256R4OhsYS = await Straight_Fire_FinanceYmBXLER.totalSupply.call({from: accounts[5]});
		const boolObXvOpp = await Straight_Fire_FinanceYmBXLER.transferFrom.call(addressdvCerQJ, addressQAXurvy, uintbMuoPgy, {from: accounts[1]});
		const boolaNVmZv0 = await Straight_Fire_FinanceYmBXLER.transferFrom.call(addressE90GwRY, addressFuJP3Mq, uintnR8Ihh, {from: accounts[3]});

		assert.equal(boolObXvOpp, false)
		assert.equal(boolaNVmZv0, false)
		assert.equal(boolrCXVKAq, false)
		assert.equal(uint256R4OhsYS, BigInt("80000000000000000000000"))
		assert.equal(uint256Slrn4Os, BigInt("0"))
		assert.equal(uintNBTeEq3, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceBmK7pCA = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintJpe8XfF = BigInt("1160")
		const addressNX8FVNL = accounts[2]
		const uintHGtSQ8j = BigInt("236")
		const addressxskDqg0 = accounts[0]
		const uintL51NdW3 = BigInt("1200")
		const addressbvt7Uie = accounts[4]
		const uinty9TCQ2c = BigInt("155")
		const addressn1wIW0 = accounts[4]
		const uintiTxkAQY = BigInt("221")
		const addressw4Lba20 = accounts[5]
		const boolEYWrbIU = await Straight_Fire_FinanceBmK7pCA.transfer.call(addressNX8FVNL, uintJpe8XfF, {from: accounts[0]});
		const boolvaRu4ro = await Straight_Fire_FinanceBmK7pCA.transfer.call(addressxskDqg0, uintHGtSQ8j, {from: accounts[1]});
		const boolx6y3ydM = await Straight_Fire_FinanceBmK7pCA.approve.call(addressbvt7Uie, uintL51NdW3, {from: accounts[4]});
		const booloqu10vp = await Straight_Fire_FinanceBmK7pCA.transfer.call(addressn1wIW0, uinty9TCQ2c, {from: accounts[3]});
		const boolF0Rdgv8 = await Straight_Fire_FinanceBmK7pCA.transfer.call(addressw4Lba20, uintiTxkAQY, {from: accounts[5]});

		assert.equal(boolEYWrbIU, false)
		assert.equal(boolF0Rdgv8, false)
		assert.equal(booloqu10vp, false)
		assert.equal(boolvaRu4ro, false)
		assert.equal(boolx6y3ydM, true)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiHKfHgH = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttEjOB37 = BigInt("413")
		const addressUmFD5Rf = accounts[3]
		const addresstk8vhBZ = accounts[4]
		const uintNLLPWYZ = BigInt("1069")
		const addressc0JKciB = accounts[2]
		const addressIWUW32P = accounts[3]
		const uintxr6n9mL = BigInt("2010")
		const addressIpAbJg8 = accounts[4]
		const boolff6Pb87 = await Straight_Fire_FinanceiHKfHgH.transferFrom.call(addresstk8vhBZ, addressUmFD5Rf, uinttEjOB37, {from: accounts[2]});
		const boolKtqNKjm = await Straight_Fire_FinanceiHKfHgH.transferFrom.call(addressIWUW32P, addressc0JKciB, uintNLLPWYZ, {from: accounts[3]});
		const boolv9ngGLG = await Straight_Fire_FinanceiHKfHgH.approve.call(addressIpAbJg8, uintxr6n9mL, {from: accounts[4]});
	});
})