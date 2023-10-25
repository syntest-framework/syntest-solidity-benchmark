const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringe2fPJ7J = "A5qcFLhkv1a1IYf3n93tnPOyOi45"
		const stringkGte5Zd = "NNQeu"
		const uintGQ7dXZh = BigInt("1227")
		const FinalzgWJRV = await Final.new(stringe2fPJ7J, stringkGte5Zd, uintGQ7dXZh, {from: accounts[3]});
		const uintufq2a5 = BigInt("1082")
		const addressSofPrzO = accounts[4]
		const addressFGw15W = accounts[4]
		const uinteZ74LIw = BigInt("377")
		const addresshWkQgcB = accounts[4]
		const boolYZOdkzT = await FinalzgWJRV.transferFrom.call(addressFGw15W, addressSofPrzO, uintufq2a5, {from: accounts[0]});
		const booleXdlhAm = await FinalzgWJRV.transfer.call(addresshWkQgcB, uinteZ74LIw, {from: accounts[0]});

		await expect(FinalzgWJRV.transferFrom.call(addressFGw15W, addressSofPrzO, uintufq2a5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringcY2aEs1 = "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P"
		const stringbvRQHQ = "NVgy8aEjrnZoOTNW4jcvM5QxnAhBEYjLlHH1GKYCGFWGfm7W2nI4HA8aNFAXrJdqLXMNmvdsz3cS3"
		const uintUGdG9Sw = BigInt("794")
		const FinalREnax4v = await Final.new(stringcY2aEs1, stringbvRQHQ, uintUGdG9Sw, {from: accounts[4]});
		const uintGPeJhE = BigInt("283")
		const addressXadpOb7 = accounts[1]
		const uintXClyccN = BigInt("1414")
		const addressLNxablc = accounts[4]
		const uintNQ71LEy = BigInt("1013")
		const addressI4aez2h = accounts[3]
		const boolwQi2lF = await FinalREnax4v.approveAndCall.call(addressXadpOb7, uintGPeJhE, {from: accounts[4]});
		const stringtYNHtz = await FinalREnax4v.name.call({from: accounts[0]});
		const boolK1oTNgA = await FinalREnax4v.increaseAllowance.call(addressLNxablc, uintXClyccN, {from: accounts[1]});
		const boolp0MkuRg = await FinalREnax4v.transfer.call(addressI4aez2h, uintNQ71LEy, {from: accounts[3]});

		assert.equal(boolwQi2lF, true)
		assert.equal(stringtYNHtz, "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P")
		await expect(FinalREnax4v.increaseAllowance.call(addressLNxablc, uintXClyccN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCRrEcP = ""
		const stringNfNROEV = "vdi5jgerW1"
		const uintAOZIjgA = BigInt("1660")
		const FinallpYxvQU = await Final.new(stringCRrEcP, stringNfNROEV, uintAOZIjgA, {from: accounts[1]});
		const uintdnvkE58 = BigInt("1199")
		const addressZY7IqEn = accounts[4]
		const uintPkeZcpF = BigInt("2019")
		const addressPDvyNeb = accounts[2]
		const uintuQCVWOm = BigInt("1722")
		const addressG0R4Yti = accounts[3]
		const stringdJ1fA9Z = await FinallpYxvQU.symbol.call({from: accounts[4]});
		const boolSpQ23N8 = await FinallpYxvQU.transfer.call(addressZY7IqEn, uintdnvkE58, {from: accounts[3]});
		const bools7VYLQc = await FinallpYxvQU.increaseAllowance.call(addressPDvyNeb, uintPkeZcpF, {from: accounts[4]});
		const boolTkHmMmY = await FinallpYxvQU.approve.call(addressG0R4Yti, uintuQCVWOm, {from: accounts[2]});
		const uint8lUBRXrB = await FinallpYxvQU.decimals.call({from: accounts[0]});

		assert.equal(stringdJ1fA9Z, "vdi5jgerW1")
		await expect(FinallpYxvQU.transfer.call(addressZY7IqEn, uintdnvkE58, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringoXmmJ9w = "Jb18B3t06sh4eNvSDblF1LF5YYNU4vkkkmPmwEe9W8sXJtrnUzEoYFQUs2zukiZQLXvlfJI7D9aFhoZ"
		const stringlDBJ9Yy = "aCrbx3Ju4ukIsnceuSd4Wi6RhyLfh4z2CyDyc3tWU4Asys3JAjjCHhFP1kECjcLCKtnCVpfaLumzs4JyPkyhiye3jHtr"
		const uintgWyJaly = BigInt("250")
		const FinaliFHtOqP = await Final.new(stringoXmmJ9w, stringlDBJ9Yy, uintgWyJaly, {from: "0x0000000000000000000000000000000000000001"});
		const uintFQxzngm = BigInt("1410")
		const addressjMnISxI = accounts[5]
		const addresskXMMq8 = accounts[3]
		const uintlX26S6c = BigInt("1646")
		const addressvfCaUJs = accounts[1]
		const bool5AIogm = await FinaliFHtOqP.transferFrom.call(addresskXMMq8, addressjMnISxI, uintFQxzngm, {from: accounts[0]});
		const boolevQPpxd = await FinaliFHtOqP.transfer.call(addressvfCaUJs, uintlX26S6c, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringPulOWFJ = "9T0iW6GFL5EQV3OvMtFB7PB3eBUCgcetttGtKCpBXWNViJK1RNAlNtiHkdYNkQEvCs"
		const stringcpozLZ9 = "yBhVr2ExvL2Dl4A1jwrH5Q5nZ1JARS8uVJQf06LsVTT7YJ"
		const uintObOcrDJ = BigInt("488")
		const FinalRHklLZB = await Final.new(stringPulOWFJ, stringcpozLZ9, uintObOcrDJ, {from: accounts[2]});
		const uintU9Lc3lz = BigInt("1413")
		const addressxUbx0NL = accounts[2]
		const uintk5yFzij = BigInt("1890")
		const addressmlOapHE = "0x0000000000000000000000000000000000000001"
		const uintGYcpXw = BigInt("1657")
		const addressYMDNW1C = accounts[4]
		const uintnJ4wCq5 = BigInt("1706")
		const addressamTVupz = accounts[3]
		const addressgskCebw = "0x0000000000000000000000000000000000000001"
		const boolZ2bZlwN = await FinalRHklLZB.approve.call(addressxUbx0NL, uintU9Lc3lz, {from: accounts[0]});
		const boolke3Wzxi = await FinalRHklLZB.approveAndCall.call(addressmlOapHE, uintk5yFzij, {from: accounts[5]});
		const boolJoFAAYn = await FinalRHklLZB.approveAndCall.call(addressYMDNW1C, uintGYcpXw, {from: accounts[0]});
		const boolZP0inF2 = await FinalRHklLZB.approve.call(addressamTVupz, uintnJ4wCq5, {from: accounts[2]});
		const stringIed4D1 = await FinalRHklLZB.name.call({from: accounts[4]});
		const boold8Q5Jb2 = await FinalRHklLZB.transferownership.call(addressgskCebw, {from: accounts[0]});

		assert.equal(boolZ2bZlwN, true)
		await expect(FinalRHklLZB.approveAndCall.call(addressmlOapHE, uintk5yFzij, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringgzGQR5K = "H3nVwlXMbf9K3edlFkKgJh2hZqcaQkY7sD6X7MaPJcV6bi6lUKd1LuOETNiG3szUDa5PUJghU5HGGrBTc7V"
		const stringaNYBcrz = "5yugYPAywgwvNw1qsMQOIN59SFPulS8SCvrTPMKMufzUkynnusN7uHB"
		const uintFWOQlx2 = BigInt("129")
		const FinalcXzeTOH = await Final.new(stringgzGQR5K, stringaNYBcrz, uintFWOQlx2, {from: accounts[0]});
		const addressXRfSHWy = accounts[0]
		const boolHJxhLcC = await FinalcXzeTOH.transferownership.call(addressXRfSHWy, {from: accounts[0]});
		const stringxtjsAvo = await FinalcXzeTOH.symbol.call({from: accounts[3]});
		const uintnDTBu6P = await FinalcXzeTOH.totalSupply.call({from: accounts[4]});

		assert.equal(boolHJxhLcC, true)
		assert.equal(stringxtjsAvo, "5yugYPAywgwvNw1qsMQOIN59SFPulS8SCvrTPMKMufzUkynnusN7uHB")
		assert.equal(uintnDTBu6P, BigInt("129000000000000000000"))
	});

	it('test for Final', async () => {
		const stringcY2aEs1 = "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P"
		const stringbvRQHQ = "NVgy8aEjrnZoOTNW4jcvM5QxnAhBEYjLlHH1GKYCGFWGfm7W2nI4HA8aNFAXrJdqLXMNmvdsz3cS3"
		const uinthY91QLj = BigInt("794")
		const FinalREnax4v = await Final.new(stringcY2aEs1, stringbvRQHQ, uinthY91QLj, {from: accounts[4]});
		const uintj2zlpeG = BigInt("283")
		const addressTlMhYF = accounts[1]
		const addressgQXJboP = accounts[3]
		const uinthc6l9uM = BigInt("1904")
		const addressd2731as = accounts[0]
		const addressy4khU7j = accounts[4]
		const uintt11m2Lv = BigInt("1414")
		const addressyyQtnQ = accounts[4]
		const uintY5Q3Hl2 = BigInt("1013")
		const addressbDZa5X7 = accounts[3]
		const boolwQi2lF = await FinalREnax4v.approveAndCall.call(addressTlMhYF, uintj2zlpeG, {from: accounts[4]});
		const boolQhL6ey7 = await FinalREnax4v.transferownership.call(addressgQXJboP, {from: accounts[4]});
		const boolmvfPXAN = await FinalREnax4v.transferFrom.call(addressy4khU7j, addressd2731as, uinthc6l9uM, {from: accounts[4]});
		const stringtYNHtz = await FinalREnax4v.name.call({from: accounts[0]});
		const boolK1oTNgA = await FinalREnax4v.increaseAllowance.call(addressyyQtnQ, uintt11m2Lv, {from: accounts[1]});
		const boolp0MkuRg = await FinalREnax4v.transfer.call(addressbDZa5X7, uintY5Q3Hl2, {from: accounts[3]});

		assert.equal(boolQhL6ey7, true)
		assert.equal(boolmvfPXAN, true)
		assert.equal(boolwQi2lF, true)
		assert.equal(stringtYNHtz, "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P")
		await expect(FinalREnax4v.increaseAllowance.call(addressyyQtnQ, uintt11m2Lv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringcY2aEs1 = "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P"
		const stringbvRQHQ = "NVgy8aEjrnZoOTNW4jcvM5QxnAhBEYjLlHH1GKYCGFWGfm7W2nI4HA8aNFAXrJdqLXMNmvdsz3cS3"
		const uintBc1qhKd = BigInt("794")
		const FinalREnax4v = await Final.new(stringcY2aEs1, stringbvRQHQ, uintBc1qhKd, {from: accounts[4]});
		const uintpu0ahBs = BigInt("0")
		const addressFCBVilI = accounts[2]
		const addressFrc2XgM = accounts[3]
		const boolbbPeZ0K = await FinalREnax4v.transferFrom.call(addressFrc2XgM, addressFCBVilI, uintpu0ahBs, {from: accounts[5]});

		assert.equal(boolbbPeZ0K, true)
	});

	it('test for Final', async () => {
		const stringcY2aEs1 = "v2EQoLycgY61wBU6oYsxQBS8sF3gmpJtqFdwi61li8zN25DLHC5d3qNuhcExpnuSFBtl6P"
		const stringbvRQHQ = "NVgy8aEjrnZoOTNW4jcvM5QxnAhBEYjLlHH1GKYCGFWGfm7W2nI4HA8aNFAXrJdqLXMNmvdsz3cS3"
		const uintBX9nGs = BigInt("794")
		const FinalREnax4v = await Final.new(stringcY2aEs1, stringbvRQHQ, uintBX9nGs, {from: accounts[4]});
		const uintF1fWm25 = BigInt("0")
		const addressH0lBpqv = accounts[1]
		const uinty2zwctq = BigInt("1881")
		const addressWhJkzHX = accounts[2]
		const boolwQi2lF = await FinalREnax4v.approveAndCall.call(addressH0lBpqv, uintF1fWm25, {from: accounts[4]});
		const boola3gd5Wd = await FinalREnax4v.transfer.call(addressWhJkzHX, uinty2zwctq, {from: accounts[1]});

		assert.equal(boolwQi2lF, true)
		await expect(FinalREnax4v.transfer.call(addressWhJkzHX, uinty2zwctq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})