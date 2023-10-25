const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodydmO1ih = await HungryHoody.new({from: accounts[3]});
		const addresskNd5lYr = accounts[2]
		const addressaSoxxOH = accounts[3]
		const uintNLwSghy = BigInt("1027")
		const addressDFwkUw7 = "0x0000000000000000000000000000000000000001"
		const addressiRqeacq = accounts[3]
		const uintqu3TwmT = await HungryHoodydmO1ih.allowance.call(addressaSoxxOH, addresskNd5lYr, {from: accounts[0]});
		const uintdIAU6SH = await HungryHoodydmO1ih.totalSupply.call({from: accounts[1]});
		const uintLB4gJGQ = await HungryHoodydmO1ih.totalSupply.call({from: accounts[5]});
		const boolCTOaxGZ = await HungryHoodydmO1ih.transferFrom.call(addressiRqeacq, addressDFwkUw7, uintNLwSghy, {from: accounts[1]});

		assert.equal(uintLB4gJGQ, BigInt("25000000000000000000"))
		assert.equal(uintdIAU6SH, BigInt("25000000000000000000"))
		assert.equal(uintqu3TwmT, BigInt("0"))
		await expect(HungryHoodydmO1ih.transferFrom.call(addressiRqeacq, addressDFwkUw7, uintNLwSghy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuCsGgsL = await HungryHoody.new({from: accounts[2]});
		const uinthn1tfnU = BigInt("745")
		const uintegd3O3j = BigInt("1995")
		const addressf5yHuFR = accounts[0]
		const uintWfkffm = BigInt("1466")
		const addressfVdFhE7 = accounts[2]
		const addressJEXmwbg = accounts[3]
		const uintEUrLFwP = BigInt("2007")
		const uintExXfpx3 = BigInt("87")
		const uintVlls9Hw = BigInt("1593")
		const uintYYKMjRY = BigInt("804")
		const uintL7aBRI = await HungryHoodyuCsGgsL.safeMul.call(uintegd3O3j, uinthn1tfnU, {from: accounts[0]});
		const uintd6hCwm5 = await HungryHoodyuCsGgsL.balanceOf.call(addressf5yHuFR, {from: accounts[3]});
		const boolHtAg4Iz = await HungryHoodyuCsGgsL.transferFrom.call(addressJEXmwbg, addressfVdFhE7, uintWfkffm, {from: accounts[4]});
		const uinthr1xsL = await HungryHoodyuCsGgsL.safeAdd.call(uintExXfpx3, uintEUrLFwP, {from: accounts[0]});
		const uintKC68QFX = await HungryHoodyuCsGgsL.safeAdd.call(uintYYKMjRY, uintVlls9Hw, {from: accounts[2]});

		assert.equal(uintL7aBRI, BigInt("1486275"))
		assert.equal(uintd6hCwm5, BigInt("0"))
		await expect(HungryHoodyuCsGgsL.transferFrom.call(addressJEXmwbg, addressfVdFhE7, uintWfkffm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyewedBJG = await HungryHoody.new({from: accounts[1]});
		const uinttMjbTHu = BigInt("327")
		const uintHBO0KTG = BigInt("1708")
		const addressED9voDR = accounts[5]
		const addressSyti4Rm = accounts[0]
		const uinta32XYqt = BigInt("102")
		const uintHw3YyN = BigInt("228")
		const uintRpd9Nx = BigInt("1404")
		const addressejj6kDL = accounts[5]
		const addressvP08IG5 = accounts[1]
		const uintuVWGfSr = BigInt("1101")
		const uintyecyNw = BigInt("1570")
		const uintGuLc8w = await HungryHoodyewedBJG.safeMul.call(uintHBO0KTG, uinttMjbTHu, {from: accounts[5]});
		const uintAxj42rQ = await HungryHoodyewedBJG.allowance.call(addressSyti4Rm, addressED9voDR, {from: accounts[2]});
		const uintqtlklc = await HungryHoodyewedBJG.safeAdd.call(uintHw3YyN, uinta32XYqt, {from: accounts[4]});
		const boolX4nVkUK = await HungryHoodyewedBJG.transferFrom.call(addressvP08IG5, addressejj6kDL, uintRpd9Nx, {from: accounts[4]});
		const uintJA1j6My = await HungryHoodyewedBJG.safeMul.call(uintyecyNw, uintuVWGfSr, {from: accounts[5]});
		const uintVqE0ciQ = await HungryHoodyewedBJG.totalSupply.call({from: accounts[3]});

		assert.equal(uintAxj42rQ, BigInt("0"))
		assert.equal(uintGuLc8w, BigInt("558516"))
		assert.equal(uintqtlklc, BigInt("330"))
		await expect(HungryHoodyewedBJG.transferFrom.call(addressvP08IG5, addressejj6kDL, uintRpd9Nx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyjP7cd6X = await HungryHoody.new({from: accounts[3]});
		const uintjjmXzpV = BigInt("743")
		const addressOOiQUPX = accounts[0]
		const addresseOvU5n = accounts[4]
		const uintAzFErHT = BigInt("1974")
		const uintLZWXyhO = BigInt("150")
		const uintnt1NkOa = BigInt("1319")
		const uintIsRfOU = BigInt("1232")
		const bool89qo7c = await HungryHoodyjP7cd6X.transfer.call(addressOOiQUPX, uintjjmXzpV, {from: accounts[3]});
		const uintpMMWXMw = await HungryHoodyjP7cd6X.balanceOf.call(addresseOvU5n, {from: "0x0000000000000000000000000000000000000001"});
		const uintNNjxQ6e = await HungryHoodyjP7cd6X.safeSub.call(uintLZWXyhO, uintAzFErHT, {from: accounts[3]});
		const uint5XZMHG = await HungryHoodyjP7cd6X.totalSupply.call({from: accounts[5]});
		const uintDCBj7D = await HungryHoodyjP7cd6X.safeSub.call(uintIsRfOU, uintnt1NkOa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool89qo7c, true)
		assert.equal(uintpMMWXMw, BigInt("0"))
		await expect(HungryHoodyjP7cd6X.safeSub.call(uintLZWXyhO, uintAzFErHT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodytWvQmL4 = await HungryHoody.new({from: accounts[0]});
		const uintbNieTrn = BigInt("1032")
		const uintVBjI6A = BigInt("1583")
		const uintEPWPspJ = BigInt("391")
		const uintfTGlLxr = BigInt("955")
		const uintt69OSl = BigInt("1669")
		const addresszSoZIK7 = accounts[4]
		const uintIdX5u1l = BigInt("555")
		const uintYsMrMSv = BigInt("1324")
		const uinthixFJnV = BigInt("28")
		const uinthYPmEhT = BigInt("1634")
		const uintCHGTUEr = await HungryHoodytWvQmL4.safeAdd.call(uintVBjI6A, uintbNieTrn, {from: accounts[2]});
		const uintkCkU0Bn = await HungryHoodytWvQmL4.safeSub.call(uintfTGlLxr, uintEPWPspJ, {from: accounts[1]});
		const boolbwSOfhG = await HungryHoodytWvQmL4.approve.call(addresszSoZIK7, uintt69OSl, {from: accounts[3]});
		const uintLbWAZ19 = await HungryHoodytWvQmL4.safeDiv.call(uintYsMrMSv, uintIdX5u1l, {from: "0x0000000000000000000000000000000000000001"});
		const uintKZmXBpC = await HungryHoodytWvQmL4.safeSub.call(uinthYPmEhT, uinthixFJnV, {from: accounts[1]});

		assert.equal(boolbwSOfhG, true)
		assert.equal(uintCHGTUEr, BigInt("2615"))
		assert.equal(uintKZmXBpC, BigInt("1606"))
		assert.equal(uintLbWAZ19, BigInt("2"))
		assert.equal(uintkCkU0Bn, BigInt("564"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyM50KntJ = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addressesZQKcs = accounts[0]
		const addresspj7jBTL = accounts[5]
		const uintMv6dZd = BigInt("42")
		const addressGo9rtm8 = accounts[5]
		const uintZXLihkc = BigInt("1534")
		const uinttqOFQ9i = BigInt("422")
		const uintA4PWzLx = await HungryHoodyM50KntJ.totalSupply.call({from: accounts[1]});
		const uintBVrEYr3 = await HungryHoodyM50KntJ.allowance.call(addresspj7jBTL, addressesZQKcs, {from: accounts[3]});
		const boolpmBzjkG = await HungryHoodyM50KntJ.transfer.call(addressGo9rtm8, uintMv6dZd, {from: accounts[3]});
		const uinttMefc4b = await HungryHoodyM50KntJ.safeDiv.call(uinttqOFQ9i, uintZXLihkc, {from: accounts[2]});
	});
})