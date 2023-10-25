const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintJbWySjn = BigInt("2032")
		const stringIJ1knuY = "agxZfAQHiV4XtqgNXkpQ5SJKKXjR3TSycO7U8oGUV1IOMO6mh67dRBqAJcmXRT7sj42HjPm"
		const stringcUBiV6y = "4"
		const INScsMTclh = await INS.new(uintJbWySjn, stringIJ1knuY, stringcUBiV6y, {from: accounts[2]});
		const uintm973NOa = BigInt("524")
		const addressMaeVZCO = accounts[4]
		const uintyo4rnPp = BigInt("1162")
		const boolxg9Rz1g = await INScsMTclh.approve.call(addressMaeVZCO, uintm973NOa, {from: "0x0000000000000000000000000000000000000001"});
		const boolhyTt9yu = await INScsMTclh.burn.call(uintyo4rnPp, {from: accounts[0]});

		assert.equal(boolxg9Rz1g, true)
		await expect(INScsMTclh.burn.call(uintyo4rnPp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintr6LqyPu = BigInt("274")
		const stringR59H0tR = "726g4N4NBVOFVJRO5nBCqaCy8agPVYKxHED1zmJWNIJ1wfduD8QgRy9TRhzSn"
		const stringuqaS1jz = "Q5g9obPcAE5wSijcVUsIb0ySEgzSSgoVC0A93DFU67vxQaXUtTr"
		const INSJrTweNb = await INS.new(uintr6LqyPu, stringR59H0tR, stringuqaS1jz, {from: accounts[0]});
		const byteVYfrzKI = "0x1913060e1b04191b0d1920011503"
		const uintE3eWfsP = BigInt("2018")
		const addresshuSIKa = accounts[1]
		const uintJelPfic = BigInt("273")
		const addressHWd7VTy = accounts[5]
		const addressMBzz3Sg = accounts[2]
		const uintHNvokZl = BigInt("1918")
		const addressm7OYAuU = accounts[2]
		const boolNH9A2YF = await INSJrTweNb.approveAndCall.call(addresshuSIKa, uintE3eWfsP, byteVYfrzKI, {from: accounts[4]});
		const boolKyntQrA = await INSJrTweNb.transferFrom.call(addressMBzz3Sg, addressHWd7VTy, uintJelPfic, {from: accounts[4]});
		const boolmgm46Z2 = await INSJrTweNb.burnFrom.call(addressm7OYAuU, uintHNvokZl, {from: accounts[5]});

		await expect(INSJrTweNb.approveAndCall.call(addresshuSIKa, uintE3eWfsP, byteVYfrzKI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintTpKgO1I = BigInt("1640")
		const stringMbx1yhB = "N5m9SVA7D7B5Au1lxJ7wHnwUwoynSdYmC4AcA3J9lIqq3slaQF5caK0f0UXApAwAzuIDfzxW7bNr"
		const stringPfI5Sf = "8hIrl1zCmB5ph5MxShSKxmdtUn1RkM6lK8oQAv6cbaK22uaA2bdeZStmBKY94HdIOOQr3TfXj0Imc0NrsJLeW5rOVR"
		const INSdU7ISZb = await INS.new(uintTpKgO1I, stringMbx1yhB, stringPfI5Sf, {from: accounts[2]});
		const uintOL4BT70 = BigInt("1270")
		const addressdQRHUe6 = accounts[4]
		const uintUPRbhUz = BigInt("684")
		const uintErkrbEE = BigInt("714")
		const addressiXd9GMQ = accounts[4]
		const boolxwj8y5g = await INSdU7ISZb.burnFrom.call(addressdQRHUe6, uintOL4BT70, {from: accounts[0]});
		const boolJsCR53E = await INSdU7ISZb.burn.call(uintUPRbhUz, {from: accounts[1]});
		const boolgpSGZN1 = await INSdU7ISZb.approve.call(addressiXd9GMQ, uintErkrbEE, {from: accounts[3]});

		await expect(INSdU7ISZb.burnFrom.call(addressdQRHUe6, uintOL4BT70, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintwjXDa2l = BigInt("681")
		const stringQPOZXZb = "KKxU4MQRWlx16C2pqcirm2E9E9GWJAx3hu9HpasWe1W3G5ploEoEwPSt7y9XIPJ"
		const stringTFsEwDg = "mryBctIU8kSWiy641fXlvFExsUIY5823qH"
		const INSGiZFVQi = await INS.new(uintwjXDa2l, stringQPOZXZb, stringTFsEwDg, {from: accounts[3]});
		const uintrC03Ynw = BigInt("57")
		const uintQkaPXx = BigInt("776")
		const addressnc6g3p = accounts[4]
		const addressDwhMRu1 = accounts[2]
		const boolZZfjIaW = await INSGiZFVQi.burn.call(uintrC03Ynw, {from: accounts[3]});
		const boolXX62qT = await INSGiZFVQi.transferFrom.call(addressDwhMRu1, addressnc6g3p, uintQkaPXx, {from: accounts[4]});

		assert.equal(boolZZfjIaW, true)
		await expect(INSGiZFVQi.transferFrom.call(addressDwhMRu1, addressnc6g3p, uintQkaPXx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintyCyPShS = BigInt("1086")
		const stringGhz2sKu = "VMlUYBuSGmOLyW803rnBWF"
		const stringg40kCs = "Ybgtm49rrUjUYLBfyV5EjBAXo1e7VTotDLh7flD3G86w4C8"
		const INScg5u07L = await INS.new(uintyCyPShS, stringGhz2sKu, stringg40kCs, {from: "0x0000000000000000000000000000000000000001"});
		const uintgfmyf9M = BigInt("851")
		const addresswaVXSSJ = accounts[5]
		const uintWpGFOBx = BigInt("1180")
		const addressAdFUfDZ = accounts[0]
		const byterU0i4DA = "0x010d0208190516130d1d171105110808141f1c1b1203170a03"
		const uintDgRiQHu = BigInt("72")
		const addresspOHxni8 = accounts[5]
		const uintfwkho4M = BigInt("532")
		const addressVnQfrzf = accounts[1]
		const boolbhdCCj6 = await INScg5u07L.approve.call(addresswaVXSSJ, uintgfmyf9M, {from: "0x0000000000000000000000000000000000000001"});
		const boolsfwSoqQ = await INScg5u07L.transfer.call(addressAdFUfDZ, uintWpGFOBx, {from: accounts[3]});
		const boolqHfjn5G = await INScg5u07L.approveAndCall.call(addresspOHxni8, uintDgRiQHu, byterU0i4DA, {from: accounts[4]});
		const boolfymBdxO = await INScg5u07L.transfer.call(addressVnQfrzf, uintfwkho4M, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uinthnZ8m96 = BigInt("2032")
		const stringIJ1knuY = "agxZfAQHiV4XtqgNXkpQ5SJKKXjR3TSycO7U8oGUV1IOMO6mh67dRBqAJcmXRT7sj42HjPm"
		const stringcUBiV6y = "4"
		const INScsMTclh = await INS.new(uinthnZ8m96, stringIJ1knuY, stringcUBiV6y, {from: accounts[2]});
		const uintFsngbWQ = BigInt("524")
		const addressSmuA96 = accounts[4]
		const uintMuqFbG = BigInt("806")
		const addressla2kQ2l = accounts[1]
		const boolxg9Rz1g = await INScsMTclh.approve.call(addressSmuA96, uintFsngbWQ, {from: "0x0000000000000000000000000000000000000001"});
		const booltj9GgBv = await INScsMTclh.transfer.call(addressla2kQ2l, uintMuqFbG, {from: accounts[1]});

		assert.equal(boolxg9Rz1g, true)
		await expect(INScsMTclh.transfer.call(addressla2kQ2l, uintMuqFbG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})