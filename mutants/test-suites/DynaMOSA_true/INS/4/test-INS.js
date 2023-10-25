const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintLQEHKDM = BigInt("1150")
		const stringZAvyHXa = "MAn8NizFIy3b3KxvbbOox4sVvGxRMHRL08lsIbZz7p0YPgoSMB5j9ezmEr6OE8VtTOdSDwPGptiUKCMxlMGIPxAA9G3"
		const stringlihrCfT = "GPgVDYbDTdUr"
		const INSSTtu0sY = await INS.new(uintLQEHKDM, stringZAvyHXa, stringlihrCfT, {from: accounts[2]});
		const uintGrnHvUQ = BigInt("711")
		const uintU99zWim = BigInt("850")
		const addressvVVnzRf = accounts[4]
		const uintsfbJIGG = BigInt("465")
		const addressv51IA3Y = accounts[1]
		const uintSm5rSTV = BigInt("1927")
		const addressdeb96Y = accounts[1]
//		const boolHPR549c = await INSSTtu0sY.burn.call(uintGrnHvUQ, {from: accounts[1]});
//		const boolQ86eYx = await INSSTtu0sY.approve.call(addressvVVnzRf, uintU99zWim, {from: accounts[5]});
//		const boolC1zY6j5 = await INSSTtu0sY.transfer.call(addressv51IA3Y, uintsfbJIGG, {from: accounts[4]});
//		const boolrlQcwmu = await INSSTtu0sY.transfer.call(addressdeb96Y, uintSm5rSTV, {from: accounts[2]});

		await expect(INSSTtu0sY.burn.call(uintGrnHvUQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintKKkJMw = BigInt("1074")
		const stringsu4B3FN = "oUm6Sp"
		const stringCbvU7uu = "Tse3R3empyFG5EsfKnKtMDlDuOypPSIaGyV39lP8BREkKf"
		const INSBCzjdvQ = await INS.new(uintKKkJMw, stringsu4B3FN, stringCbvU7uu, {from: accounts[0]});
		const bytexjIKjBr = "0x1b0301170414021d1d"
		const uinttwlYDlg = BigInt("459")
		const addressxVy9c6d = "0x0000000000000000000000000000000000000001"
		const uintBE0IqN = BigInt("792")
		const addressPX7GOK = accounts[0]
		const uintWvuVsUG = BigInt("942")
		const addressM2OB5MP = accounts[2]
		const bytec7NyKRk = "0x130f1f12010d1116071a0016141d19"
		const uintRbOCjfx = BigInt("1938")
		const addressFI2ymFz = accounts[1]
//		const boolJ787wyI = await INSBCzjdvQ.approveAndCall.call(addressxVy9c6d, uinttwlYDlg, bytexjIKjBr, {from: accounts[4]});
//		const boolUHKuNUr = await INSBCzjdvQ.burnFrom.call(addressPX7GOK, uintBE0IqN, {from: accounts[0]});
//		const boolddrlN50 = await INSBCzjdvQ.approve.call(addressM2OB5MP, uintWvuVsUG, {from: accounts[3]});
//		const booloPJxNK8 = await INSBCzjdvQ.approveAndCall.call(addressFI2ymFz, uintRbOCjfx, bytec7NyKRk, {from: accounts[0]});

		await expect(INSBCzjdvQ.approveAndCall.call(addressxVy9c6d, uinttwlYDlg, bytexjIKjBr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintbuEPn1a = BigInt("457")
		const stringmCHKDdv = "xYv2w9fPX1tmzYFKD0uYYhTRhkOjsUAPi5pKHejxDPtaWFos9p0PlusEwzIwdTXNQnvLumTgrDfOL3tc"
		const stringzcmklZw = "Aq4c1w86Ls6HFmPaiME9eBN64frOfFtn65FEdk3LTYm6xRe"
		const INSUxFNBF = await INS.new(uintbuEPn1a, stringmCHKDdv, stringzcmklZw, {from: "0x0000000000000000000000000000000000000001"});
		const uintqb5Jgj4 = BigInt("791")
		const addressGJc9g9 = accounts[2]
		const uintQpERsz9 = BigInt("1482")
		const addresskXtd4ZV = accounts[3]
		const addresshmvp2E0 = accounts[4]
		const booldLANn48 = await INSUxFNBF.approve.call(addressGJc9g9, uintqb5Jgj4, {from: accounts[4]});
		const boolvTgmasT = await INSUxFNBF.transferFrom.call(addresshmvp2E0, addresskXtd4ZV, uintQpERsz9, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintNqqBFxL = BigInt("239")
		const stringzhYRQtY = "hcvWhW6RYzwBA6K3qkTEOsfWpEi9eTp5peoeHuFkqdrePT6B5C5sXVMt"
		const stringMbjcr4z = "TjNVNIHff7R0FByL2aFX6mkx3fcY53BvGTFnzyxCuIALQSbX64QyX6hJ7hNTYbkiEUabJrRGfLcgyUFPmkOL5jC1Dl"
		const INStEmiood = await INS.new(uintNqqBFxL, stringzhYRQtY, stringMbjcr4z, {from: accounts[2]});
		const uintwGQI8D = BigInt("344")
		const addressLY4MaA = accounts[0]
		const uintZs4uRL3 = BigInt("662")
		const addressbuhjcUq = "0x0000000000000000000000000000000000000001"
		const uintvI6IBZ = BigInt("1672")
		const addresstKMjERt = accounts[0]
		const uintgJADnks = BigInt("1026")
		const addressW5vwaMu = accounts[5]
		const boolpeo8577 = await INStEmiood.approve.call(addressLY4MaA, uintwGQI8D, {from: accounts[1]});
//		const boolgMFWgCL = await INStEmiood.transfer.call(addressbuhjcUq, uintZs4uRL3, {from: accounts[1]});
//		const boolu6U8ctE = await INStEmiood.transfer.call(addresstKMjERt, uintvI6IBZ, {from: accounts[0]});
//		const boolm6h46G = await INStEmiood.transfer.call(addressW5vwaMu, uintgJADnks, {from: accounts[4]});

		assert.equal(boolpeo8577, true)
		await expect(INStEmiood.transfer.call(addressbuhjcUq, uintZs4uRL3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintJG1plDl = BigInt("1310")
		const stringve27OY = "gP"
		const stringCc1SMMW = "OpqgiP5i6pQEJ0dBTjqtDu8GPWj"
		const INSADKhXzv = await INS.new(uintJG1plDl, stringve27OY, stringCc1SMMW, {from: accounts[2]});
		const uintLJHWW3z = BigInt("1173")
		const addressTPMna5g = accounts[4]
		const addresszbBlsbV = accounts[2]
		const uintbAEC42f = BigInt("1833")
		const addressIrNIgVX = accounts[2]
//		const boolzI6i2r4 = await INSADKhXzv.transferFrom.call(addresszbBlsbV, addressTPMna5g, uintLJHWW3z, {from: accounts[1]});
//		const boolfjuvrSw = await INSADKhXzv.transfer.call(addressIrNIgVX, uintbAEC42f, {from: accounts[0]});

		await expect(INSADKhXzv.transferFrom.call(addresszbBlsbV, addressTPMna5g, uintLJHWW3z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintuBbAeF3 = BigInt("414")
		const stringxD7SauS = "QXnI8xlLXYHOJe"
		const stringeISBIyh = "td5I1UfCGySSp7ufqHGS"
		const INSyjPgvxM = await INS.new(uintuBbAeF3, stringxD7SauS, stringeISBIyh, {from: accounts[5]});
		const uintDl0Du2h = BigInt("1098")
		const addressp0cPeUT = accounts[3]
		const uintVVPwt7t = BigInt("954")
		const addressNh00v7 = accounts[1]
		const byteKFKJfJg = "0x191512130f03100d1314131e16081c060b1d06011a1301101c120a1b"
		const uint4WlX0v = BigInt("1792")
		const addressJgt2766 = accounts[1]
		const uintSGOIW5S = BigInt("673")
		const addressU5YQYxC = accounts[4]
		const boolxcKibkE = await INSyjPgvxM.approve.call(addressp0cPeUT, uintDl0Du2h, {from: accounts[1]});
//		const boolXVIouLE = await INSyjPgvxM.burnFrom.call(addressNh00v7, uintVVPwt7t, {from: accounts[2]});
//		const boolBoNDH6x = await INSyjPgvxM.approveAndCall.call(addressJgt2766, uint4WlX0v, byteKFKJfJg, {from: accounts[0]});
//		const boolQEL2Xy = await INSyjPgvxM.burnFrom.call(addressU5YQYxC, uintSGOIW5S, {from: accounts[4]});

		assert.equal(boolxcKibkE, true)
		await expect(INSyjPgvxM.burnFrom.call(addressNh00v7, uintVVPwt7t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintHcIXw4j = BigInt("1455")
		const stringKr7C2N0 = "4NuyHKxmhMkoszfYMiyA507IM7LlVF4dMCkIt7dm6g6JrVHo"
		const stringnKASJ8a = "f01xzfuGIfGeDXNMAGHSGn8IW8KTFYkfEA3GOrwltGnU0daRTzqEAPVyTc"
		const INSJwHLi4 = await INS.new(uintHcIXw4j, stringKr7C2N0, stringnKASJ8a, {from: accounts[4]});
		const uintE8tflhC = BigInt("632")
		const address2J2C7b = accounts[3]
		const bytedIfT6lt = "0x0c131917150f0e1e160d1a05051f0b01150a0b0705120102170209191e09"
		const uintevG3IeC = BigInt("1195")
		const addressbRv7Wtk = accounts[4]
		const boolBMHaHao = await INSJwHLi4.transfer.call(address2J2C7b, uintE8tflhC, {from: accounts[4]});
//		const boolYSycOft = await INSJwHLi4.approveAndCall.call(addressbRv7Wtk, uintevG3IeC, bytedIfT6lt, {from: accounts[3]});

		assert.equal(boolBMHaHao, true)
		await expect(INSJwHLi4.approveAndCall.call(addressbRv7Wtk, uintevG3IeC, bytedIfT6lt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintTshD6Ea = BigInt("139")
		const stringVQz0wxB = "fKQsJlvUPCtI7ByLFj8ogT5JY2UvG0g8rIchGNpcfVJLb6RYhYxDWxu2MRKIHWLXnBLIij5UUuWKhfPvMUrAyvC"
		const stringxYqaYkB = "lihM1vcoED5EPbYerwCb7sk5oYISNHVx"
		const INSByCJyLY = await INS.new(uintTshD6Ea, stringVQz0wxB, stringxYqaYkB, {from: accounts[2]});
		const uintfpt3wNy = BigInt("1212")
		const addresshqO14Li = accounts[2]
		const uintyedmTAR = BigInt("167")
		const addressOuO4sMQ = accounts[4]
//		const boolatTma8M = await INSByCJyLY.burnFrom.call(addresshqO14Li, uintfpt3wNy, {from: accounts[2]});
//		const bool6t9Efc = await INSByCJyLY.burnFrom.call(addressOuO4sMQ, uintyedmTAR, {from: accounts[3]});

		await expect(INSByCJyLY.burnFrom.call(addresshqO14Li, uintfpt3wNy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSju2RzE = BigInt("139")
		const stringVQz0wxB = "fKQsJlvUPCtI7ByLFj8ogT5JY2UvG0g8rIchGNpcfVJLb6RYhYxDWxu2MRKIHWLXnBLIij5UUuWKhfPvMUrAyvC"
		const stringxYqaYkB = "lihM1vcoED5EPbYerwCb7sk5oYISNHVx"
		const INSByCJyLY = await INS.new(uintSju2RzE, stringVQz0wxB, stringxYqaYkB, {from: accounts[2]});
		const uintswpES7V = BigInt("1361")
		const uintb52qNC8 = BigInt("1212")
		const addresseqJaDgz = accounts[1]
		const uintnEooSTW = BigInt("167")
		const addressMttUshE = accounts[4]
		const boolNkjspdS = await INSByCJyLY.burn.call(uintswpES7V, {from: accounts[2]});
//		const boolatTma8M = await INSByCJyLY.burnFrom.call(addresseqJaDgz, uintb52qNC8, {from: accounts[2]});
//		const bool6t9Efc = await INSByCJyLY.burnFrom.call(addressMttUshE, uintnEooSTW, {from: accounts[3]});

		assert.equal(boolNkjspdS, true)
		await expect(INSByCJyLY.burnFrom.call(addresseqJaDgz, uintb52qNC8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintyfxdaqo = BigInt("1043")
		const stringWbVVDa0 = "n5IRG2qxGxmBxK6y1tKh7rFBwCtAUjlR4E7TLS"
		const stringhYvvbCz = "F9WL8YGIDEETAtqJWglp23heYIlLkNOaRqoveN5SVsL6jKOvcQjV68RHJwCzA2V"
		const INSGIsvAPS = await INS.new(uintyfxdaqo, stringWbVVDa0, stringhYvvbCz, {from: accounts[1]});
		const uint8hZaIf = BigInt("0")
		const addresslPYqVXY = accounts[1]
		const addressDhGg81R = accounts[4]
		const byteSTQc89D = "0x190511081514060211"
		const uintLjIgjr8 = BigInt("1504")
		const addresswDnUOr = accounts[2]
		const uintuMgIPfc = BigInt("565")
		const addresspZ5i2IT = accounts[0]
		const addressuFdepNy = accounts[2]
		const uintuzm537r = BigInt("353")
		const addressVdpmHnH = accounts[1]
		const uintpsFsppd = BigInt("1008")
		const uintoRlzZkU = BigInt("523")
		const addressB9FkTqo = accounts[4]
		const addressbrrVE3d = accounts[0]
		const byteqUrTEwe = "0x0b1e170b1f110d1416020b1b0f12071001071d0c1c0914070d0d"
		const uintHPaUUr3 = BigInt("1903")
		const addressqzNZ1CF = "0x0000000000000000000000000000000000000001"
		const uintSKL0YhK = BigInt("1789")
		const boolczmUkJ = await INSGIsvAPS.transferFrom.call(addressDhGg81R, addresslPYqVXY, uint8hZaIf, {from: accounts[1]});
//		const boolPzmDfkX = await INSGIsvAPS.approveAndCall.call(addresswDnUOr, uintLjIgjr8, byteSTQc89D, {from: accounts[1]});
//		const boolgW2F98y = await INSGIsvAPS.transferFrom.call(addressuFdepNy, addresspZ5i2IT, uintuMgIPfc, {from: accounts[1]});
//		const boolbTRCy4z = await INSGIsvAPS.burnFrom.call(addressVdpmHnH, uintuzm537r, {from: "0x0000000000000000000000000000000000000001"});
//		const boolccb3Tc2 = await INSGIsvAPS.burn.call(uintpsFsppd, {from: accounts[3]});
//		const boolmry6Cw1 = await INSGIsvAPS.transferFrom.call(addressbrrVE3d, addressB9FkTqo, uintoRlzZkU, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7xN0e1 = await INSGIsvAPS.approveAndCall.call(addressqzNZ1CF, uintHPaUUr3, byteqUrTEwe, {from: accounts[3]});
//		const boolAu7tbjP = await INSGIsvAPS.burn.call(uintSKL0YhK, {from: accounts[0]});

		assert.equal(boolczmUkJ, true)
		await expect(INSGIsvAPS.approveAndCall.call(addresswDnUOr, uintLjIgjr8, byteSTQc89D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})