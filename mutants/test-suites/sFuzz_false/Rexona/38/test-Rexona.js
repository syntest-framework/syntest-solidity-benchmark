const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringwcFQxvY = "Nb"
		const stringZyUvZF = "789f6NH2xNxo1FYdnSpa4Wx"
		const uintYYnoHYz = BigInt("1616")
		const RexonaStCmTwh = await Rexona.new(stringwcFQxvY, stringZyUvZF, uintYYnoHYz, {from: accounts[5]});
		const uintVC4M7CI = BigInt("2031")
		const addressQHMxUOA = accounts[3]
		const addressJ5DzfY6 = accounts[4]
		const uintBzFIbjZ = BigInt("1684")
		const addressMUIKlhx = accounts[3]
		const uintnN2JNBr = BigInt("505")
		const addressyQuvE9P = accounts[2]
		const addressM5CYoz = accounts[3]
		const uintLFRAj5U = BigInt("855")
		const addressZZVDu4S = accounts[3]
		const uintwikdcNj = BigInt("538")
		const addresssAsFEV2 = accounts[5]
		const addressMhEqSP2 = accounts[3]
		const uintUGNDeOd = BigInt("973")
		const addressqu7aUj9 = accounts[4]
//		const boolsX7fzzW = await RexonaStCmTwh.transferFrom.call(addressJ5DzfY6, addressQHMxUOA, uintVC4M7CI, {from: accounts[2]});
//		const boolE9S87i = await RexonaStCmTwh.approve.call(addressMUIKlhx, uintBzFIbjZ, {from: accounts[4]});
//		const boolEPiz4xp = await RexonaStCmTwh.transferFrom.call(addressM5CYoz, addressyQuvE9P, uintnN2JNBr, {from: accounts[0]});
//		const boolEDObjhF = await RexonaStCmTwh.approveAndCall.call(addressZZVDu4S, uintLFRAj5U, {from: accounts[2]});
//		const boolnhCdV0d = await RexonaStCmTwh.transferFrom.call(addressMhEqSP2, addresssAsFEV2, uintwikdcNj, {from: accounts[5]});
//		const boolqOvNC16 = await RexonaStCmTwh.transfer.call(addressqu7aUj9, uintUGNDeOd, {from: accounts[3]});

		await expect(RexonaStCmTwh.transferFrom.call(addressJ5DzfY6, addressQHMxUOA, uintVC4M7CI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLY7BTfo = "OVg9g5UkMsK1OnjSVYl3"
		const stringhqAFhCY = "Nr0gALxs1EXZC2cZINjMkeisNzkJemColBMvEhJ53IMvRzzfol7tKdvdn1iKO35A7h1WgJ7VD0ngDNDhJD"
		const uintXdQ5mrI = BigInt("2007")
		const RexonahqxTTBW = await Rexona.new(stringLY7BTfo, stringhqAFhCY, uintXdQ5mrI, {from: accounts[4]});
		const uintZkWlBN = BigInt("1982")
		const addressbN7PNWD = accounts[2]
		const uintN9OSrvw = BigInt("398")
		const addressUOJCUgm = accounts[3]
		const uintv2tDHda = BigInt("630")
		const addresssxrMR8B = accounts[2]
		const addressSjNYaM = accounts[1]
		const boolOxWi2T = await RexonahqxTTBW.approve.call(addressbN7PNWD, uintZkWlBN, {from: accounts[3]});
//		const boolmtQSkEN = await RexonahqxTTBW.approveAndCall.call(addressUOJCUgm, uintN9OSrvw, {from: accounts[2]});
//		const boolMPxYfxG = await RexonahqxTTBW.transferFrom.call(addressSjNYaM, addresssxrMR8B, uintv2tDHda, {from: accounts[4]});

		assert.equal(boolOxWi2T, true)
		await expect(RexonahqxTTBW.approveAndCall.call(addressUOJCUgm, uintN9OSrvw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOxvZgv3 = "EP0SkQs9LFe5atY8hkEkRupw97gU6hCrGCWziaE7BnHSejAWrvoAQw7HndxjydHVgqPuhzh8TNiM7agrA1wvIpUv"
		const stringb4QbJB = "kUu52RpnrmCMYAlNtu1SA19wQjmA1BHMCAh1UQ4xn"
		const uintkv2jjC6 = BigInt("637")
		const RexonangSNpla = await Rexona.new(stringOxvZgv3, stringb4QbJB, uintkv2jjC6, {from: accounts[4]});
		const uintMpyJc41 = BigInt("1775")
		const addressN1nveld = accounts[3]
		const uint0Lqc0S = BigInt("1721")
		const addressCAg78ze = accounts[4]
		const uintCNR4V2x = BigInt("1540")
		const addressAPNVMXk = accounts[4]
//		const boolT0cnx7u = await RexonangSNpla.transfer.call(addressN1nveld, uintMpyJc41, {from: accounts[1]});
//		const boolnvhE62K = await RexonangSNpla.approve.call(addressCAg78ze, uint0Lqc0S, {from: accounts[0]});
//		const boolYb15w4 = await RexonangSNpla.approveAndCall.call(addressAPNVMXk, uintCNR4V2x, {from: accounts[1]});

		await expect(RexonangSNpla.transfer.call(addressN1nveld, uintMpyJc41, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringdLRGXM8 = "Kk4tTI6hf"
		const stringnTZAyZP = "HFFo0Pn8xfDVDJeugkg5AEFCwzsqGzi4HuKR8kwJq9i51uRjTlJet7nh16"
		const uintJDFkgP8 = BigInt("1918")
		const RexonaNvycfYq = await Rexona.new(stringdLRGXM8, stringnTZAyZP, uintJDFkgP8, {from: accounts[0]});
		const addressFpZ2VcD = accounts[2]
		const uintqFAUpT = BigInt("380")
		const addressNqz35l = accounts[1]
//		const booligRrMi = await RexonaNvycfYq.transferownership.call(addressFpZ2VcD, {from: accounts[2]});
//		const boolqpaSCmC = await RexonaNvycfYq.approveAndCall.call(addressNqz35l, uintqFAUpT, {from: accounts[4]});

		await expect(RexonaNvycfYq.transferownership.call(addressFpZ2VcD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringcAtm58A = "Fk5imG9M0YfQu1n7RVBHw84nKP4P3So1jcHq4cjr9gNcrsqCRKfQWfYcLS8FWOKW8oZ7haBfdF6"
		const stringTnTr1wK = "SQuitYKhqN87yqm3l"
		const uintqa0EvM = BigInt("846")
		const RexonaAbrx0dA = await Rexona.new(stringcAtm58A, stringTnTr1wK, uintqa0EvM, {from: accounts[1]});
		const uintAOiGyOf = BigInt("1943")
		const addressUFQdwi = accounts[5]
		const uintAwHUCUc = BigInt("1553")
		const addressmRvIv2i = accounts[2]
		const boolr7MVyel = await RexonaAbrx0dA.transfer.call(addressUFQdwi, uintAOiGyOf, {from: accounts[1]});
//		const boolcoS1tf7 = await RexonaAbrx0dA.approveAndCall.call(addressmRvIv2i, uintAwHUCUc, {from: accounts[3]});

		assert.equal(boolr7MVyel, true)
		await expect(RexonaAbrx0dA.approveAndCall.call(addressmRvIv2i, uintAwHUCUc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringdLRGXM8 = "Kk4tTI6hf"
		const stringnTZAyZP = "HFFo0Pn8xfDVDJeugkg5AEFCwzsqGzi4HuKR8kwJq9i51uRjTlJet7nh16"
		const uintPb0DrF = BigInt("1918")
		const RexonaNvycfYq = await Rexona.new(stringdLRGXM8, stringnTZAyZP, uintPb0DrF, {from: accounts[0]});
		const uintIGrMhtb = BigInt("930")
		const addressyRx9Df = accounts[1]
		const uintGcozBdL = BigInt("1140")
		const addressgcSerHo = accounts[4]
		const addressXLyqQx = accounts[3]
		const boolZS6OilU = await RexonaNvycfYq.approveAndCall.call(addressyRx9Df, uintIGrMhtb, {from: accounts[0]});
//		const boolKO82mG1 = await RexonaNvycfYq.transferFrom.call(addressXLyqQx, addressgcSerHo, uintGcozBdL, {from: accounts[4]});

		assert.equal(boolZS6OilU, true)
		await expect(RexonaNvycfYq.transferFrom.call(addressXLyqQx, addressgcSerHo, uintGcozBdL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringL4PltTl = "jxx3dsQ9sIhEfFB"
		const stringIZTmjIb = "QUzjDm0LnZ19nId1yCDlcAGx1wm2zHv69Ikh2HD2QznePagEM6SdF9ikwBdEZXIMHJpTCJQPcNrI9hfaXszTjH24ZW2"
		const uintmmXelwd = BigInt("102")
		const RexonabFVgSjU = await Rexona.new(stringL4PltTl, stringIZTmjIb, uintmmXelwd, {from: "0x0000000000000000000000000000000000000001"});
		const uintDCqt4N5 = BigInt("518")
		const addressiK6S7R9 = accounts[2]
		const uintshLvitt = BigInt("564")
		const addressqhr4k0g = accounts[3]
		const addressLpHeEG = accounts[4]
		const uintXzngYU6 = BigInt("312")
		const addressw1LzJX3 = accounts[4]
		const uintE5C0J2 = BigInt("979")
		const addresstVTHKrk = accounts[2]
		const uintlOSXzBm = BigInt("886")
		const addressFhJZc8T = accounts[0]
		const addressIddpxUg = accounts[1]
		const boolP1iF1qH = await RexonabFVgSjU.approveAndCall.call(addressiK6S7R9, uintDCqt4N5, {from: accounts[2]});
		const boolBx89FY = await RexonabFVgSjU.transfer.call(addressqhr4k0g, uintshLvitt, {from: accounts[4]});
		const boola0gL3eH = await RexonabFVgSjU.transferownership.call(addressLpHeEG, {from: accounts[4]});
		const boolRI3RgOJ = await RexonabFVgSjU.transfer.call(addressw1LzJX3, uintXzngYU6, {from: accounts[1]});
		const boolVBkTqL = await RexonabFVgSjU.approveAndCall.call(addresstVTHKrk, uintE5C0J2, {from: accounts[3]});
		const boolDzS8J5A = await RexonabFVgSjU.transferFrom.call(addressIddpxUg, addressFhJZc8T, uintlOSXzBm, {from: accounts[4]});
	});

	it('test for Rexona', async () => {
		const stringdLRGXM8 = "Kk4tTI6hf"
		const stringnTZAyZP = "HFFo0Pn8xfDVDJeugkg5AEFCwzsqGzi4HuKR8kwJq9i51uRjTlJet7nh16"
		const uintC52qtxD = BigInt("1918")
		const RexonaNvycfYq = await Rexona.new(stringdLRGXM8, stringnTZAyZP, uintC52qtxD, {from: accounts[0]});
		const uintPAdbacV = BigInt("0")
		const addressgqCnPOC = accounts[4]
		const uintASwhNML = BigInt("2")
		const addressZZcTyx1 = accounts[5]
		const boolZS6OilU = await RexonaNvycfYq.approveAndCall.call(addressgqCnPOC, uintPAdbacV, {from: accounts[0]});
		const booloiRlxAp = await RexonaNvycfYq.transfer.call(addressZZcTyx1, uintASwhNML, {from: accounts[0]});

		assert.equal(boolZS6OilU, true)
		assert.equal(booloiRlxAp, true)
	});

	it('test for Rexona', async () => {
		const stringdLRGXM8 = "Kk4tTI6hf"
		const stringnTZAyZP = "HFFo0Pn8xfDVDJeugkg5AEFCwzsqGzi4HuKR8kwJq9i51uRjTlJet7nh16"
		const uintCAg2WML = BigInt("1918")
		const RexonaNvycfYq = await Rexona.new(stringdLRGXM8, stringnTZAyZP, uintCAg2WML, {from: accounts[0]});
		const uintUPUUXCH = BigInt("1812")
		const addressy0HwsDC = accounts[1]
		const uintRirmlxr = BigInt("0")
		const addressnD5JZBB = accounts[5]
		const boolp191VfC = await RexonaNvycfYq.approve.call(addressy0HwsDC, uintUPUUXCH, {from: accounts[2]});
		const booloiRlxAp = await RexonaNvycfYq.transfer.call(addressnD5JZBB, uintRirmlxr, {from: accounts[0]});

		assert.equal(booloiRlxAp, true)
		assert.equal(boolp191VfC, true)
	});
})