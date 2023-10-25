const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringB1RYOyZ = "emfSS5XAEZaojfQyMNKXhQvLWUl2A5qLGH3S7louqkwlldvvsS6TkywCpMTKdc4WtomPYlpE"
		const stringSaUglXr = "m1WT9t8CILf9Jy3a8l6auDveIam2LQ6Tonx66v2bM4EzCWTzlyDuXw6KasWCXtBPGzYWRQ3er47vdQ0xk4RvAunvsttIFV"
		const uintJbn6FAv = BigInt("227")
		const OnXFinancesbtq4pE = await OnXFinance.new(stringB1RYOyZ, stringSaUglXr, uintJbn6FAv, {from: "0x0000000000000000000000000000000000000001"});
		const uinthIQCaR = BigInt("223")
		const addressVqJsQbo = accounts[0]
		const addressHovg4gF = accounts[2]
		const uintqiwokBp = BigInt("1785")
		const addressqAITqC = accounts[5]
		const uintt3UedLm = BigInt("1499")
		const addressMoPXayH = accounts[2]
		const boolySlZN5w = await OnXFinancesbtq4pE.transferFrom.call(addressHovg4gF, addressVqJsQbo, uinthIQCaR, {from: accounts[1]});
		const boolSiLj5mh = await OnXFinancesbtq4pE.transfer.call(addressqAITqC, uintqiwokBp, {from: accounts[4]});
		const bool1YUpd8 = await OnXFinancesbtq4pE.decreaseAllowance.call(addressMoPXayH, uintt3UedLm, {from: accounts[3]});
		const uintghaERI = await OnXFinancesbtq4pE.totalSupply.call({from: accounts[0]});
	});

	it('test for OnXFinance', async () => {
		const stringhCXi3j9 = "HBGtXjfYl4vjxpt4x83zD4z1p169QwhkR9FcuJIQ"
		const stringtuMM0Hw = "iZbqu8tmQxu24NwwVj4qVvugmrcUXn1ocAfdarRfeXycE"
		const uintyrwzgaO = BigInt("795")
		const OnXFinanceYM67jSA = await OnXFinance.new(stringhCXi3j9, stringtuMM0Hw, uintyrwzgaO, {from: accounts[3]});
		const uintAybx5cv = BigInt("153")
		const addressAC4CLa = accounts[2]
		const uintrDav8Wt = BigInt("1071")
		const addressOivHiEP = accounts[4]
		const uintSeqUXx4 = BigInt("1649")
		const addressNwCqmf0 = accounts[3]
		const boolIhmAayU = await OnXFinanceYM67jSA.approve.call(addressAC4CLa, uintAybx5cv, {from: accounts[3]});
//		const boolAivDn4W = await OnXFinanceYM67jSA.transfer.call(addressOivHiEP, uintrDav8Wt, {from: accounts[1]});
//		const uint8QuxFhtj = await OnXFinanceYM67jSA.decimals.call({from: accounts[4]});
//		const boolRq8ueY = await OnXFinanceYM67jSA.approve.call(addressNwCqmf0, uintSeqUXx4, {from: accounts[2]});

		assert.equal(boolIhmAayU, true)
		await expect(OnXFinanceYM67jSA.transfer.call(addressOivHiEP, uintrDav8Wt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringGaM4pn9 = "ewznbodF69Qtt7TnW2FSIs80zznMgPXaReJi1AUFVAyTa4JhBciUOg4Q0"
		const stringsPVpVnv = "KMVEWk7g1LjqnFJ3eHwqsSgVX3tMuK5x8b"
		const uintzUsuzDH = BigInt("449")
		const OnXFinanceSX8JTA = await OnXFinance.new(stringGaM4pn9, stringsPVpVnv, uintzUsuzDH, {from: accounts[1]});
		const uintVA7n5hF = BigInt("818")
		const addressUJyFYH5 = accounts[5]
		const addressQmpOcPa = "0x0000000000000000000000000000000000000001"
		const addressN5hHphH = accounts[0]
		const uintBQuylk3 = BigInt("692")
		const addressV3hQGCX = accounts[3]
//		const boolrrtxxu = await OnXFinanceSX8JTA.approveAndCall.call(addressUJyFYH5, uintVA7n5hF, {from: accounts[0]});
//		const uintEu9W40 = await OnXFinanceSX8JTA.allowance.call(addressN5hHphH, addressQmpOcPa, {from: accounts[4]});
//		const boolLNQlwhK = await OnXFinanceSX8JTA.decreaseAllowance.call(addressV3hQGCX, uintBQuylk3, {from: accounts[0]});

		await expect(OnXFinanceSX8JTA.approveAndCall.call(addressUJyFYH5, uintVA7n5hF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringinDFMZK = "gN5cBidn8vdnjUlLPtwqsy6o3fjo7qh6QmwkgpnAsOvMND7pvCn7Du3oYcmTI1j4TLpaMfOQxt"
		const stringv7z1tDB = "nBQWGH4TiR9N0FpDYhNEsDUHiZSQQ2wArA"
		const uintSP57LUU = BigInt("44")
		const OnXFinancebgkecAf = await OnXFinance.new(stringinDFMZK, stringv7z1tDB, uintSP57LUU, {from: accounts[2]});
		const uintHF3mm9E = BigInt("651")
		const addressCpZIhLN = accounts[4]
		const addressufwpWF2 = accounts[2]
//		const boolRUXbzHY = await OnXFinancebgkecAf.increaseAllowance.call(addressCpZIhLN, uintHF3mm9E, {from: accounts[0]});
//		const stringWtQWqWB = await OnXFinancebgkecAf.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolxFc4zcM = await OnXFinancebgkecAf.transferownership.call(addressufwpWF2, {from: accounts[1]});
//		const uintyGKTBQh = await OnXFinancebgkecAf.totalSupply.call({from: accounts[0]});

		await expect(OnXFinancebgkecAf.increaseAllowance.call(addressCpZIhLN, uintHF3mm9E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringhISxWiS = "zqqGgsiqtqaIDI7mvMzkXBzmcCvcnlHrMMUjdg7kt6YkBsnpIu7v7e8wchG5ITiBmd9dsQ"
		const stringRzjzwpK = "y"
		const uinttRAcG1 = BigInt("1094")
		const OnXFinancezzKRQ57 = await OnXFinance.new(stringhISxWiS, stringRzjzwpK, uinttRAcG1, {from: accounts[4]});
		const uintNoK7kUY = BigInt("514")
		const addressY3BPhRE = accounts[4]
		const addresseQXJ3ou = "0x0000000000000000000000000000000000000001"
		const addressFUioXhn = accounts[4]
		const addressBHYFDGn = accounts[1]
		const uintdcmpsAG = BigInt("606")
		const addressSUhUYC = "0x0000000000000000000000000000000000000001"
		const uintrvAJrRM = BigInt("1643")
		const address5BdLtL = accounts[2]
		const boolWNwX0Jw = await OnXFinancezzKRQ57.approve.call(addressY3BPhRE, uintNoK7kUY, {from: accounts[0]});
//		const boolX4iOqoh = await OnXFinancezzKRQ57.transferownership.call(addresseQXJ3ou, {from: accounts[3]});
//		const uintNpTyVj4 = await OnXFinancezzKRQ57.allowance.call(addressBHYFDGn, addressFUioXhn, {from: accounts[3]});
//		const boolHtWcS1J = await OnXFinancezzKRQ57.approveAndCall.call(addressSUhUYC, uintdcmpsAG, {from: accounts[4]});
//		const boolwP7HM47 = await OnXFinancezzKRQ57.decreaseAllowance.call(address5BdLtL, uintrvAJrRM, {from: accounts[3]});

		assert.equal(boolWNwX0Jw, true)
		await expect(OnXFinancezzKRQ57.transferownership.call(addresseQXJ3ou, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringGaM4pn9 = "ewznbodF69Qtt7TnW2FSIs80zznMgPXaReJi1AUFVAyTa4JhBciUOg4Q0"
		const stringsPVpVnv = "KMVEWk7g1LjqnFJ3eHwqsSgVX3tMuK5x8b"
		const uintiIUYWrd = BigInt("449")
		const OnXFinanceSX8JTA = await OnXFinance.new(stringGaM4pn9, stringsPVpVnv, uintiIUYWrd, {from: accounts[1]});
		const uintfct4oRd = BigInt("1332")
		const addresscZyD9pg = accounts[1]
		const uintuV3NQ5k = BigInt("818")
		const addressbWF7qH9 = accounts[5]
		const addressW4hBfEL = "0x0000000000000000000000000000000000000001"
		const addressxH0ridK = accounts[0]
		const uintb3msEs = BigInt("692")
		const addressGrZ1W4D = accounts[3]
		const boolPYvHLpL = await OnXFinanceSX8JTA.transfer.call(addresscZyD9pg, uintfct4oRd, {from: accounts[1]});
//		const boolrrtxxu = await OnXFinanceSX8JTA.approveAndCall.call(addressbWF7qH9, uintuV3NQ5k, {from: accounts[0]});
//		const uintEu9W40 = await OnXFinanceSX8JTA.allowance.call(addressxH0ridK, addressW4hBfEL, {from: accounts[4]});
//		const boolLNQlwhK = await OnXFinanceSX8JTA.decreaseAllowance.call(addressGrZ1W4D, uintb3msEs, {from: accounts[0]});

		assert.equal(boolPYvHLpL, true)
		await expect(OnXFinanceSX8JTA.approveAndCall.call(addressbWF7qH9, uintuV3NQ5k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZTRiw7O = "sia16xugpfCsY9JM3ZVHj23rRF2ryltQWnsRqygUfrvZzJIdL25TuLOwYTJ8qUho5nNNemGzb5tPql2lGFzpvTzcte"
		const stringThyyIVS = "Tj6EXfv587E3URlDLsyUrSn7YmCm97dNoYwno8EEB2vHIDVx"
		const uintvzgeqSs = BigInt("719")
		const OnXFinancej66NlT = await OnXFinance.new(stringZTRiw7O, stringThyyIVS, uintvzgeqSs, {from: accounts[2]});
		const uintoq7KkZ = BigInt("1995")
		const addressm1cpA3l = accounts[3]
		const uint6EHvOD = BigInt("1837")
		const addressMrlBmDF = accounts[1]
		const boolJOJiAO = await OnXFinancej66NlT.approveAndCall.call(addressm1cpA3l, uintoq7KkZ, {from: accounts[2]});
//		const boolQwELSmx = await OnXFinancej66NlT.transfer.call(addressMrlBmDF, uint6EHvOD, {from: accounts[0]});

		assert.equal(boolJOJiAO, true)
		await expect(OnXFinancej66NlT.transfer.call(addressMrlBmDF, uint6EHvOD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringcOTMZjX = "BR96ryAMf4b3qs17NPsJ3eAuMPUdzPu1EyNv2HAAEHJJLWjdRiMewKAoH346CE8CsV9"
		const stringG7kh7c4 = "23xC3gETaqyHpwcO1kRFbc7IWGOks9FQJr7c3VEgjbUJvF1kRyaRLe5ovzEjsiPG2ECJybfErGkDbB7M"
		const uintlqC5Xcd = BigInt("327")
		const OnXFinancetiEqNP = await OnXFinance.new(stringcOTMZjX, stringG7kh7c4, uintlqC5Xcd, {from: accounts[0]});
		const uintLcml5g9 = BigInt("0")
		const addressYEYaHe0 = accounts[4]
		const addressyPF56Ks = accounts[0]
		const boolAPyfXrr = await OnXFinancetiEqNP.transferFrom.call(addressyPF56Ks, addressYEYaHe0, uintLcml5g9, {from: accounts[4]});

		assert.equal(boolAPyfXrr, true)
	});
})