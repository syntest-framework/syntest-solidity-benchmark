const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressFPbbvi2 = "0x0000000000000000000000000000000000000001"
		const addressl2LxhL8 = accounts[5]
		const QuickTokenxRLb6Zi = await QuickToken.new(addressFPbbvi2, addressl2LxhL8, {from: accounts[1]});
		const uintmrHu2cU = BigInt("915")
		const addresstGquVWC = accounts[1]
		const addressQlNIBai = accounts[0]
		const uintexFI57x = BigInt("1565")
		const addressLrWD50O = accounts[4]
		const uintaeDXXe = BigInt("1047")
		const addressgdrQ69s = "0x0000000000000000000000000000000000000001"
		const uintLVWrrQU = BigInt("1776")
		const addresscnXTQd1 = "0x0000000000000000000000000000000000000001"
		const boolIKhmLm3 = await QuickTokenxRLb6Zi.approve.call(addresstGquVWC, uintmrHu2cU, {from: accounts[1]});
		const uintu2RqBdL = await QuickTokenxRLb6Zi.balanceOf.call(addressQlNIBai, {from: accounts[5]});
		const boolDjboAic = await QuickTokenxRLb6Zi.approve.call(addressLrWD50O, uintexFI57x, {from: accounts[0]});
		const boolKMZIBpL = await QuickTokenxRLb6Zi.transfer.call(addressgdrQ69s, uintaeDXXe, {from: accounts[2]});
		const boolC38kytK = await QuickTokenxRLb6Zi.approve.call(addresscnXTQd1, uintLVWrrQU, {from: accounts[5]});

		assert.equal(boolDjboAic, true)
		assert.equal(boolIKhmLm3, true)
		assert.equal(uintu2RqBdL, BigInt("0"))
		await expect(QuickTokenxRLb6Zi.transfer.call(addressgdrQ69s, uintaeDXXe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressBPFXX8f = accounts[0]
		const addressTw4zlDz = accounts[0]
		const QuickTokenOVltxfI = await QuickToken.new(addressBPFXX8f, addressTw4zlDz, {from: accounts[0]});
		const addressJlzYiqF = accounts[2]
		const addressgphReOs = accounts[0]
		const addressV3Fz7Iv = accounts[4]
		const addressqdRjxNr = "0x0000000000000000000000000000000000000001"
		const uintP8IGxCx = BigInt("1524")
		const addressZlMDNKq = accounts[5]
		const addressTbIXDfp = accounts[1]
		const addresslXeM05k = accounts[1]
		const uintiQmaG0s = await QuickTokenOVltxfI.allowance.call(addressgphReOs, addressJlzYiqF, {from: "0x0000000000000000000000000000000000000001"});
		const uinteFXJLt5 = await QuickTokenOVltxfI.allowance.call(addressqdRjxNr, addressV3Fz7Iv, {from: accounts[2]});
		const booluPfazaD = await QuickTokenOVltxfI.approve.call(addressZlMDNKq, uintP8IGxCx, {from: accounts[0]});
		const uintgzEvDV = await QuickTokenOVltxfI.allowance.call(addresslXeM05k, addressTbIXDfp, {from: accounts[1]});

		assert.equal(booluPfazaD, true)
		assert.equal(uinteFXJLt5, BigInt("0"))
		assert.equal(uintgzEvDV, BigInt("0"))
		assert.equal(uintiQmaG0s, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressygf7pUQ = accounts[4]
		const addressd1SfvYN = accounts[4]
		const QuickTokenbeeb8j6 = await QuickToken.new(addressygf7pUQ, addressd1SfvYN, {from: accounts[2]});
		const addressrvM16Wj = accounts[2]
		const uintLg5UfgA = BigInt("462")
		const addressb64g9b = accounts[1]
		const uintkauAIvT = BigInt("1540")
		const addressb8utOfr = accounts[4]
		const addressikkRLUl = accounts[4]
		const uintl3mNw5j = await QuickTokenbeeb8j6.balanceOf.call(addressrvM16Wj, {from: accounts[4]});
		const addressESlOQE2 = await QuickTokenbeeb8j6.mint.call(addressb64g9b, uintLg5UfgA, {from: accounts[5]});
		const address1FBveT = await QuickTokenbeeb8j6.mint.call(addressb8utOfr, uintkauAIvT, {from: accounts[1]});
		const uintksx8v44 = await QuickTokenbeeb8j6.balanceOf.call(addressikkRLUl, {from: accounts[5]});

		assert.equal(uintl3mNw5j, BigInt("0"))
		await expect(QuickTokenbeeb8j6.mint.call(addressb64g9b, uintLg5UfgA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressadwkRzC = accounts[1]
		const addressiGob7iK = accounts[1]
		const QuickTokenvmAZSJT = await QuickToken.new(addressadwkRzC, addressiGob7iK, {from: accounts[3]});
		const addressRwQGg8 = accounts[1]
		const uintUFDTmSt = BigInt("466")
		const addresswdpjGsT = accounts[1]
		const addressWwD3ti5 = accounts[0]
		const uintySSHy57 = BigInt("1656")
		const addressINpo9IL = accounts[4]
		const uintLSIhNHR = await QuickTokenvmAZSJT.balanceOf.call(addressRwQGg8, {from: accounts[3]});
		const boolbHHjN9i = await QuickTokenvmAZSJT.transferFrom.call(addressWwD3ti5, addresswdpjGsT, uintUFDTmSt, {from: accounts[4]});
		const boolKuZ9ugZ = await QuickTokenvmAZSJT.transfer.call(addressINpo9IL, uintySSHy57, {from: accounts[4]});

		assert.equal(uintLSIhNHR, BigInt("2000000000000"))
		await expect(QuickTokenvmAZSJT.transferFrom.call(addressWwD3ti5, addresswdpjGsT, uintUFDTmSt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKhzmNDD = accounts[2]
		const address9HbcDy = accounts[1]
		const QuickTokenlxDLS3p = await QuickToken.new(addressKhzmNDD, address9HbcDy, {from: accounts[3]});
		const uintL0uEnmK = BigInt("680")
		const addressVHfOuE = "0x0000000000000000000000000000000000000001"
		const addressUxFHYJH = accounts[4]
		const addressswilK5R = accounts[0]
		const addressPQUVrcf = accounts[2]
		const uintE7uP3up = BigInt("1522")
		const addresssOFkGNm = accounts[1]
		const addressVgevjA4 = accounts[0]
		const uint2BGjpq = BigInt("868")
		const address1jRCk9 = accounts[4]
		const boolWwkYw1w = await QuickTokenlxDLS3p.transfer.call(addressVHfOuE, uintL0uEnmK, {from: accounts[2]});
		const uintTqMiQ1u = await QuickTokenlxDLS3p.balanceOf.call(addressUxFHYJH, {from: accounts[1]});
		const uintXN4zcr2 = await QuickTokenlxDLS3p.allowance.call(addressPQUVrcf, addressswilK5R, {from: accounts[4]});
		const addressADjae4n = await QuickTokenlxDLS3p.mint.call(addresssOFkGNm, uintE7uP3up, {from: accounts[1]});
		const uintjOpJg82 = await QuickTokenlxDLS3p.balanceOf.call(addressVgevjA4, {from: accounts[4]});
		const boolvxgkQs = await QuickTokenlxDLS3p.transfer.call(address1jRCk9, uint2BGjpq, {from: accounts[0]});

		assert.equal(boolWwkYw1w, true)
		assert.equal(uintTqMiQ1u, BigInt("0"))
		assert.equal(uintXN4zcr2, BigInt("0"))
		assert.equal(uintjOpJg82, BigInt("0"))
		await expect(QuickTokenlxDLS3p.transfer.call(address1jRCk9, uint2BGjpq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKSZQdCT = accounts[2]
		const addressN9wAOfb = accounts[1]
		const QuickTokenlxDLS3p = await QuickToken.new(addressKSZQdCT, addressN9wAOfb, {from: accounts[3]});
		const uintcCMUKvK = BigInt("680")
		const addressBDzx1Am = "0x0000000000000000000000000000000000000001"
		const addressCDcdMuq = accounts[4]
		const addressM2xaRYT = accounts[5]
		const addressFxryFgi = accounts[1]
		const addressNa4VcVv = accounts[2]
		const uintF7gRy1x = BigInt("1522")
		const address57UsZ5 = accounts[1]
		const addressjPWzxe = accounts[0]
		const addressLNg4up = accounts[1]
		const uint3G8f2q = BigInt("868")
		const addressCucL9x = accounts[4]
		const boolWwkYw1w = await QuickTokenlxDLS3p.transfer.call(addressBDzx1Am, uintcCMUKvK, {from: accounts[2]});
		const uintxODeMT = await QuickTokenlxDLS3p.balanceOf.call(addressCDcdMuq, {from: accounts[2]});
		const uintTqMiQ1u = await QuickTokenlxDLS3p.balanceOf.call(addressM2xaRYT, {from: accounts[1]});
		const uintXN4zcr2 = await QuickTokenlxDLS3p.allowance.call(addressNa4VcVv, addressFxryFgi, {from: accounts[4]});
		const addressADjae4n = await QuickTokenlxDLS3p.mint.call(address57UsZ5, uintF7gRy1x, {from: accounts[1]});
		const uintjOpJg82 = await QuickTokenlxDLS3p.balanceOf.call(addressjPWzxe, {from: accounts[4]});
		const addressHiTzwyF = await QuickTokenlxDLS3p.setMinter.call(addressLNg4up, {from: accounts[1]});
		const boolvxgkQs = await QuickTokenlxDLS3p.transfer.call(addressCucL9x, uint3G8f2q, {from: accounts[0]});

		assert.equal(boolWwkYw1w, true)
		assert.equal(uintTqMiQ1u, BigInt("0"))
		assert.equal(uintXN4zcr2, BigInt("0"))
		assert.equal(uintjOpJg82, BigInt("0"))
		assert.equal(uintxODeMT, BigInt("0"))
		await expect(QuickTokenlxDLS3p.transfer.call(addressCucL9x, uint3G8f2q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressrk8sc3s = accounts[1]
		const addressYTQUqNF = accounts[0]
		const QuickTokenWf7O81a = await QuickToken.new(addressrk8sc3s, addressYTQUqNF, {from: accounts[3]});
		const addressKFlhUPo = accounts[4]
		const uintsWXUO6m = BigInt("1297")
		const addresss5wF5Dg = accounts[5]
		const addressA6O0GaJ = accounts[3]
		const addressM44vVtG = accounts[4]
		const uintN1XsJWS = BigInt("1363")
		const addressHPS2UMK = accounts[2]
		const addresscRJ0qxb = await QuickTokenWf7O81a.setMinter.call(addressKFlhUPo, {from: accounts[1]});
		const boolmk5jg6K = await QuickTokenWf7O81a.transfer.call(addresss5wF5Dg, uintsWXUO6m, {from: accounts[4]});
		const uintEOL4dol = await QuickTokenWf7O81a.allowance.call(addressM44vVtG, addressA6O0GaJ, {from: accounts[2]});
		const boolWNrybqj = await QuickTokenWf7O81a.approve.call(addressHPS2UMK, uintN1XsJWS, {from: accounts[3]});

		await expect(QuickTokenWf7O81a.setMinter.call(addressKFlhUPo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressPvIXkLN = accounts[2]
		const addressUNE7qoD = accounts[1]
		const QuickTokenlxDLS3p = await QuickToken.new(addressPvIXkLN, addressUNE7qoD, {from: accounts[3]});
		const uintCwSkC7F = BigInt("680")
		const addressaeymbKK = "0x0000000000000000000000000000000000000000"
		const addressLHiUVR = accounts[0]
		const addressaRJeGdE = accounts[3]
		const addressVNBJoe2 = accounts[4]
		const addressSjOeOEA = accounts[0]
		const addressAHZLN10 = accounts[2]
		const uinta1NcTKR = BigInt("161")
		const addressxdWK2pU = accounts[3]
		const uintE7pFLrB = BigInt("1522")
		const addressqeVYrf = accounts[1]
		const addressdL2pq9L = accounts[0]
		const uintox9Ck3h = BigInt("868")
		const addressyq7AtIH = accounts[1]
		const uintY1qfNsD = BigInt("1817")
		const addressZnMBWZI = accounts[4]
		const addressKRiL8q = accounts[4]
		const boolWwkYw1w = await QuickTokenlxDLS3p.transfer.call(addressaeymbKK, uintCwSkC7F, {from: accounts[2]});
		const uintC2Xk86U = await QuickTokenlxDLS3p.allowance.call(addressaRJeGdE, addressLHiUVR, {from: accounts[3]});
		const uintTqMiQ1u = await QuickTokenlxDLS3p.balanceOf.call(addressVNBJoe2, {from: accounts[1]});
		const uintXN4zcr2 = await QuickTokenlxDLS3p.allowance.call(addressAHZLN10, addressSjOeOEA, {from: accounts[4]});
		const booloZyzOAO = await QuickTokenlxDLS3p.approve.call(addressxdWK2pU, uinta1NcTKR, {from: accounts[4]});
		const addressADjae4n = await QuickTokenlxDLS3p.mint.call(addressqeVYrf, uintE7pFLrB, {from: accounts[1]});
		const uintjOpJg82 = await QuickTokenlxDLS3p.balanceOf.call(addressdL2pq9L, {from: accounts[4]});
		const boolvxgkQs = await QuickTokenlxDLS3p.transfer.call(addressyq7AtIH, uintox9Ck3h, {from: accounts[0]});
		const booluxXrSXq = await QuickTokenlxDLS3p.transferFrom.call(addressKRiL8q, addressZnMBWZI, uintY1qfNsD, {from: accounts[5]});

		await expect(QuickTokenlxDLS3p.transfer.call(addressaeymbKK, uintCwSkC7F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressGCRPcG = accounts[0]
		const addressVgV11mS = accounts[0]
		const QuickTokenCg8hHSS = await QuickToken.new(addressGCRPcG, addressVgV11mS, {from: "0x0000000000000000000000000000000000000001"});
		const uintUSaeNp4 = BigInt("862")
		const addresswSwKW8l = accounts[1]
		const uintpWpYLdQ = BigInt("230")
		const addressEsjNRf = accounts[0]
		const boolxCYFRji = await QuickTokenCg8hHSS.transfer.call(addresswSwKW8l, uintUSaeNp4, {from: accounts[3]});
		const boolpK3GFJJ = await QuickTokenCg8hHSS.transfer.call(addressEsjNRf, uintpWpYLdQ, {from: accounts[1]});
	});
})