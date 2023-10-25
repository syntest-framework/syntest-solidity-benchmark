const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintH8M1KSy = BigInt("1990")
		const stringmMO24Lk = "crI6CTqWkGZAxfFwEKa82wTETr4Qe84jAjoagpDhrkEshOsSgtjOEnI8mkOUdjqf7QlrB8rLt2a1nEp8oEByK27QH8LcICF"
		const stringQbmLlRY = "AdIrw4CWnSTSNXThnzG1jHIWZHP6wGJJYSdWJJo8wu9IXXs5ovBwrWQ7pMDANwMc8frENjDvjTOKIOfVHJxq8uX"
		const GreenMarkTrustTcK70oT = await GreenMarkTrust.new(uintH8M1KSy, stringmMO24Lk, stringQbmLlRY, {from: accounts[3]});
		const uint02Atta = BigInt("1018")
		const addressnTMHBF5 = accounts[4]
		const addressMdkqpfY = accounts[0]
		const byteuWPN4oH = "0x0715"
		const uintNL7ol3 = BigInt("258")
		const addresss2zCD4 = accounts[1]
		const boolDobeTug = await GreenMarkTrustTcK70oT.transferFrom.call(addressMdkqpfY, addressnTMHBF5, uint02Atta, {from: accounts[1]});
		const boolP3M4ey3 = await GreenMarkTrustTcK70oT.approveAndCall.call(addresss2zCD4, uintNL7ol3, byteuWPN4oH, {from: accounts[0]});

		await expect(GreenMarkTrustTcK70oT.transferFrom.call(addressMdkqpfY, addressnTMHBF5, uint02Atta, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintWulEH9R = BigInt("189")
		const stringyDhcdd6 = "UOmphvLLPHp1XitSJwVKbalVI4cSWD23e29zKYceONdPb8h4twFdvsQiljX8bA7KduTG6PMyDQiHyMB9Ct1bK1WBCJnLGk5Ed"
		const stringA7T7PCz = "rs04GgoM8ii2qKz3Rj9FfXY4c6iBzGYzaEedPvmB9k7cCbkcHuVQTsJO"
		const GreenMarkTrustBV35Ulx = await GreenMarkTrust.new(uintWulEH9R, stringyDhcdd6, stringA7T7PCz, {from: accounts[4]});
		const byteFPCCPBz = "0x20030b15131809040f"
		const uintcfQK7yr = BigInt("1605")
		const addressSELpnVg = accounts[0]
		const uintZpFvXKj = BigInt("595")
		const addressOPOPJce = accounts[4]
		const uintiflwdTz = BigInt("1663")
		const boolH171ZCI = await GreenMarkTrustBV35Ulx.approveAndCall.call(addressSELpnVg, uintcfQK7yr, byteFPCCPBz, {from: accounts[0]});
		const boolr26gmyv = await GreenMarkTrustBV35Ulx.transfer.call(addressOPOPJce, uintZpFvXKj, {from: accounts[5]});
		const boolZ0Jn2fv = await GreenMarkTrustBV35Ulx.burn.call(uintiflwdTz, {from: accounts[4]});

		await expect(GreenMarkTrustBV35Ulx.approveAndCall.call(addressSELpnVg, uintcfQK7yr, byteFPCCPBz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintw7zTAJt = BigInt("641")
		const stringIKCsZpn = "nshLvLtoa8BAbCSVVyzotwegoQNvX9lkXMuqN6k6sFsrDLGF3GsLHaMzimWErpUcz"
		const stringILCYrn0 = "bkWOtZlBOtuXQm7A"
		const GreenMarkTrustbFxiTUB = await GreenMarkTrust.new(uintw7zTAJt, stringIKCsZpn, stringILCYrn0, {from: accounts[2]});
		const uintS0bVnxL = BigInt("1616")
		const addressQsqdRR = accounts[4]
		const uintJVflzxd = BigInt("147")
		const uintDkiVxdV = BigInt("714")
		const addressmxYYIAV = accounts[0]
		const addressv7oOCiU = accounts[0]
		const boolZNWnq9p = await GreenMarkTrustbFxiTUB.approve.call(addressQsqdRR, uintS0bVnxL, {from: accounts[2]});
		const boolGfSWaXc = await GreenMarkTrustbFxiTUB.burn.call(uintJVflzxd, {from: accounts[3]});
		const boolw4mxoZU = await GreenMarkTrustbFxiTUB.transferFrom.call(addressv7oOCiU, addressmxYYIAV, uintDkiVxdV, {from: accounts[3]});

		assert.equal(boolZNWnq9p, true)
		await expect(GreenMarkTrustbFxiTUB.burn.call(uintJVflzxd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvX0ETs5 = BigInt("495")
		const stringfH4s8q = "VqxBqXoN"
		const stringgDKPcZR = "Woo7yL1BVTgqqd4F8I5Pvmj3e8GXcdzoVaYEo907swmDZLNkRGLRgwknYV5hThXRrKNRkebKyZQP6s9fI3DxQZMlFe5FtFKpMx"
		const GreenMarkTrustSTbz4lV = await GreenMarkTrust.new(uintvX0ETs5, stringfH4s8q, stringgDKPcZR, {from: "0x0000000000000000000000000000000000000001"});
		const uintczuVDOX = BigInt("1467")
		const addressFjejJQp = accounts[4]
		const addressAlhaOD = accounts[4]
		const uinthBI6qs9 = BigInt("306")
		const addressZDqLdWP = "0x0000000000000000000000000000000000000001"
		const uintHmTud41 = BigInt("395")
		const uintges3FS = BigInt("1887")
		const addressTs4VHzI = accounts[0]
		const boolBblrSrH = await GreenMarkTrustSTbz4lV.transferFrom.call(addressAlhaOD, addressFjejJQp, uintczuVDOX, {from: accounts[0]});
		const boolSEJcd5y = await GreenMarkTrustSTbz4lV.approve.call(addressZDqLdWP, uinthBI6qs9, {from: accounts[3]});
		const boolTvqFPH7 = await GreenMarkTrustSTbz4lV.burn.call(uintHmTud41, {from: accounts[1]});
		const boolp3pwnBn = await GreenMarkTrustSTbz4lV.burnFrom.call(addressTs4VHzI, uintges3FS, {from: accounts[1]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintr8WnILn = BigInt("667")
		const stringJgqD4R = "lTMGn55od5Huwuf587PqgB4i3Aw"
		const stringo1Oi1UN = "5gLiKu2BYUfX96p4Q1RTyE10i6Pcj7O"
		const GreenMarkTrustpvK4YL = await GreenMarkTrust.new(uintr8WnILn, stringJgqD4R, stringo1Oi1UN, {from: accounts[2]});
		const uintuzJW3B = BigInt("1239")
		const uintRDYurua = BigInt("2004")
		const uinti5uWuG = BigInt("1590")
		const uintWWrLMJ = BigInt("129")
		const addressfMl8pDE = accounts[0]
		const uintfucQuMz = BigInt("348")
		const addressVbLqKng = accounts[4]
		const byteKGjRHj4 = "0x101706140a10160c1f101620180d1d0c0217"
		const uintIvc2wf = BigInt("1713")
		const addressP33m8OR = accounts[3]
		const boolzuzpLqw = await GreenMarkTrustpvK4YL.burn.call(uintuzJW3B, {from: accounts[2]});
		const boolIUU1KQ = await GreenMarkTrustpvK4YL.burn.call(uintRDYurua, {from: accounts[2]});
		const booldQtYKMd = await GreenMarkTrustpvK4YL.burn.call(uinti5uWuG, {from: "0x0000000000000000000000000000000000000001"});
		const boolp2uYAeE = await GreenMarkTrustpvK4YL.burnFrom.call(addressfMl8pDE, uintWWrLMJ, {from: accounts[2]});
		const boolj6LDjMl = await GreenMarkTrustpvK4YL.burnFrom.call(addressVbLqKng, uintfucQuMz, {from: accounts[3]});
		const booly8APXeV = await GreenMarkTrustpvK4YL.approveAndCall.call(addressP33m8OR, uintIvc2wf, byteKGjRHj4, {from: accounts[1]});

		assert.equal(boolIUU1KQ, true)
		assert.equal(boolzuzpLqw, true)
		await expect(GreenMarkTrustpvK4YL.burn.call(uinti5uWuG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintZqE5lZO = BigInt("1990")
		const stringmMO24Lk = "crI6CTqWkGZAxfFwEKa82wTETr4Qe84jAjoagpDhrkEshOsSgtjOEnI8mkOUdjqf7QlrB8rLt2a1nEp8oEByK27QH8LcICF"
		const stringQbmLlRY = "AdIrw4CWnSTSNXThnzG1jHIWZHP6wGJJYSdWJJo8wu9IXXs5ovBwrWQ7pMDANwMc8frENjDvjTOKIOfVHJxq8uX"
		const GreenMarkTrustTcK70oT = await GreenMarkTrust.new(uintZqE5lZO, stringmMO24Lk, stringQbmLlRY, {from: accounts[3]});
		const uintqXTZkRA = BigInt("992")
		const addressibl5Ux2 = accounts[3]
		const uintu5DJGcS = BigInt("1518")
		const uintc3EQ9vK = BigInt("1018")
		const addressxOOgxkm = accounts[4]
		const addressUsnI1z4 = accounts[0]
		const uintKV127hj = BigInt("997")
		const addressIpblMXW = accounts[0]
		const bytenGz6gED = "0x0715"
		const uintZfBEsqS = BigInt("258")
		const addressXDvrBC = accounts[1]
		const byteUgN2qIz = "0x091e1806201d1903110b001c"
		const uintYrnQi9V = BigInt("1952")
		const addresstwZsDzx = accounts[3]
		const uintegiF2rc = BigInt("1985")
		const address3h2fFY = accounts[3]
		const address6iPbMT = accounts[2]
		const boolHn1dHTO = await GreenMarkTrustTcK70oT.burnFrom.call(addressibl5Ux2, uintqXTZkRA, {from: accounts[4]});
		const booliuoZnk4 = await GreenMarkTrustTcK70oT.burn.call(uintu5DJGcS, {from: accounts[2]});
		const boolDobeTug = await GreenMarkTrustTcK70oT.transferFrom.call(addressUsnI1z4, addressxOOgxkm, uintc3EQ9vK, {from: accounts[1]});
		const boolP6cn7qC = await GreenMarkTrustTcK70oT.burnFrom.call(addressIpblMXW, uintKV127hj, {from: accounts[4]});
		const boolP3M4ey3 = await GreenMarkTrustTcK70oT.approveAndCall.call(addressXDvrBC, uintZfBEsqS, bytenGz6gED, {from: accounts[0]});
		const boolb7VdE0 = await GreenMarkTrustTcK70oT.approveAndCall.call(addresstwZsDzx, uintYrnQi9V, byteUgN2qIz, {from: accounts[2]});
		const boolVCA5K4I = await GreenMarkTrustTcK70oT.transferFrom.call(address6iPbMT, address3h2fFY, uintegiF2rc, {from: accounts[1]});

		await expect(GreenMarkTrustTcK70oT.burnFrom.call(addressibl5Ux2, uintqXTZkRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintIhRfs11 = BigInt("1990")
		const stringmMO24Lk = "crI6CTqWkGZAxfFwEKa82wTETr4Qe84jAjoagpDhrkEshOsSgtjOEnI8mkOUdjqf7QlrB8rLt2a1nEp8oEByK27QH8LcICF"
		const stringQbmLlRY = "AdIrw4CWnSTSNXThnzG1jHIWZHP6wGJJYSdWJJo8wu9IXXs5ovBwrWQ7pMDANwMc8frENjDvjTOKIOfVHJxq8uX"
		const GreenMarkTrustTcK70oT = await GreenMarkTrust.new(uintIhRfs11, stringmMO24Lk, stringQbmLlRY, {from: accounts[3]});
		const uintN5dW9f = BigInt("636")
		const addresswxgWAwh = accounts[2]
		const booljLwjHmH = await GreenMarkTrustTcK70oT.transfer.call(addresswxgWAwh, uintN5dW9f, {from: accounts[0]});

		await expect(GreenMarkTrustTcK70oT.transfer.call(addresswxgWAwh, uintN5dW9f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintqqKSwyj = BigInt("1990")
		const stringmMO24Lk = "crI6CTqWkGZAxfFwEKa82wTETr4Qe84jAjoagpDhrkEshOsSgtjOEnI8mkOUdjqf7QlrB8rLt2a1nEp8oEByK27QH8LcICF"
		const stringQbmLlRY = "AdIrw4CWnSTSNXThnzG1jHIWZHP6wGJJYSdWJJo8wu9IXXs5ovBwrWQ7pMDANwMc8frENjDvjTOKIOfVHJxq8uX"
		const GreenMarkTrustTcK70oT = await GreenMarkTrust.new(uintqqKSwyj, stringmMO24Lk, stringQbmLlRY, {from: accounts[3]});
		const uintbFpWO7 = BigInt("366")
		const addressLx06RRo = accounts[3]
		const byteagvnhRN = "0x0d1c050a13091801071a0f14"
		const uintuMowiVI = BigInt("506")
		const addressm9SNWvS = accounts[4]
		const uintnzFardN = BigInt("1018")
		const addressQbUpwD6 = accounts[5]
		const address37SOtU = accounts[0]
		const boolK08hro = await GreenMarkTrustTcK70oT.transfer.call(addressLx06RRo, uintbFpWO7, {from: accounts[3]});
		const boolZFRISfu = await GreenMarkTrustTcK70oT.approveAndCall.call(addressm9SNWvS, uintuMowiVI, byteagvnhRN, {from: accounts[1]});
		const boolDobeTug = await GreenMarkTrustTcK70oT.transferFrom.call(address37SOtU, addressQbUpwD6, uintnzFardN, {from: accounts[1]});

		assert.equal(boolK08hro, true)
		await expect(GreenMarkTrustTcK70oT.approveAndCall.call(addressm9SNWvS, uintuMowiVI, byteagvnhRN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})