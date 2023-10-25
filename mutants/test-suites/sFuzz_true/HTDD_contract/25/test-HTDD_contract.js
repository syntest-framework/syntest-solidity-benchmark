const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contracttxVzm9P = await HTDD_contract.new({from: accounts[0]});
		const uintOlOMGcp = BigInt("1919")
		const addressHLQBZfa = "0x0000000000000000000000000000000000000001"
		const uintFSCd3cu = BigInt("1368")
		const addressKSQO5nX = accounts[4]
		const addressVCsXdH = "0x0000000000000000000000000000000000000001"
		const uintWR5RIf = BigInt("1313")
		const addressEFTkj65 = accounts[4]
		const addressNlxYiyr = accounts[4]
		const addresslysxI1a = accounts[1]
		const addresscXTrWhZ = accounts[4]
		const uintAJv6hc = BigInt("1962")
		const addressJMV4SaV = "0x0000000000000000000000000000000000000001"
//		const boolqXIrRe = await HTDD_contracttxVzm9P.transfer.call(addressHLQBZfa, uintOlOMGcp, {from: accounts[4]});
//		const boolzgfLcdu = await HTDD_contracttxVzm9P.transferFrom.call(addressVCsXdH, addressKSQO5nX, uintFSCd3cu, {from: accounts[5]});
//		const boolwZaHFJF = await HTDD_contracttxVzm9P.transferFrom.call(addressNlxYiyr, addressEFTkj65, uintWR5RIf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yED9eUQ = await HTDD_contracttxVzm9P.allowance.call(addresscXTrWhZ, addresslysxI1a, {from: accounts[2]});
//		const boolH2brCe = await HTDD_contracttxVzm9P.approve.call(addressJMV4SaV, uintAJv6hc, {from: accounts[3]});

		await expect(HTDD_contracttxVzm9P.transfer.call(addressHLQBZfa, uintOlOMGcp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractDH6eKQt = await HTDD_contract.new({from: accounts[3]});
		const uintsfaOgCh = BigInt("1305")
		const addressfJmN1fO = "0x0000000000000000000000000000000000000001"
		const addressxflP3kV = accounts[4]
		const addressC8cae7W = accounts[3]
		const boolgWPaolw = await HTDD_contractDH6eKQt.approve.call(addressfJmN1fO, uintsfaOgCh, {from: accounts[3]});
		const uint256grvViRY = await HTDD_contractDH6eKQt.allowance.call(addressC8cae7W, addressxflP3kV, {from: accounts[3]});

		assert.equal(boolgWPaolw, true)
		assert.equal(uint256grvViRY, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractE216fwc = await HTDD_contract.new({from: accounts[4]});
		const uintuRzaC75 = BigInt("1276")
		const addressXulvzLn = accounts[2]
		const addresskIBQUiG = accounts[5]
		const addresshZXLgED = accounts[2]
		const addressfqE4ccO = accounts[4]
		const uintmNn36ZS = BigInt("1741")
		const addressR1sMcjp = accounts[4]
		const addressWvvVAJq = accounts[2]
		const uinthoZmGRD = BigInt("1740")
		const addressfALHou = accounts[0]
//		const boolR1KLwMe = await HTDD_contractE216fwc.transferFrom.call(addresskIBQUiG, addressXulvzLn, uintuRzaC75, {from: accounts[3]});
//		const uint256WDMPFE1 = await HTDD_contractE216fwc.allowance.call(addressfqE4ccO, addresshZXLgED, {from: accounts[4]});
//		const boolxXNeWbM = await HTDD_contractE216fwc.transferFrom.call(addressWvvVAJq, addressR1sMcjp, uintmNn36ZS, {from: accounts[3]});
//		const boolvWj2sHS = await HTDD_contractE216fwc.approve.call(addressfALHou, uinthoZmGRD, {from: accounts[3]});

		await expect(HTDD_contractE216fwc.transferFrom.call(addresskIBQUiG, addressXulvzLn, uintuRzaC75, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractBWyxLvc = await HTDD_contract.new({from: accounts[1]});
		const uintpsmow0k = BigInt("1184")
		const addressDw9ypLC = accounts[0]
		const uintxd019wy = BigInt("172")
		const addressFYhCg1G = "0x0000000000000000000000000000000000000001"
		const addressiV3eLbn = accounts[4]
		const addressnwScmq = accounts[1]
		const uintPsG7dWE = BigInt("1708")
		const addressTcUMvIZ = accounts[3]
		const boolw5LqlNI = await HTDD_contractBWyxLvc.approve.call(addressDw9ypLC, uintpsmow0k, {from: accounts[4]});
		const boolZbTUV6 = await HTDD_contractBWyxLvc.transfer.call(addressFYhCg1G, uintxd019wy, {from: accounts[1]});
		const uint256ajp8dLc = await HTDD_contractBWyxLvc.allowance.call(addressnwScmq, addressiV3eLbn, {from: "0x0000000000000000000000000000000000000001"});
		const boolLDBVzG8 = await HTDD_contractBWyxLvc.approve.call(addressTcUMvIZ, uintPsG7dWE, {from: accounts[4]});

		assert.equal(boolLDBVzG8, true)
		assert.equal(boolZbTUV6, true)
		assert.equal(boolw5LqlNI, true)
		assert.equal(uint256ajp8dLc, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbYDtUa4 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintziHsPy5 = BigInt("1694")
		const addressNsNFbTV = accounts[0]
		const uintvbgvLl9 = BigInt("513")
		const addressxJNTeKW = "0x0000000000000000000000000000000000000001"
		const addressCByKRMs = accounts[1]
		const uintWVZG9vp = BigInt("1802")
		const addressZjerNgb = accounts[5]
		const addressgVT1Vra = accounts[1]
		const boolYwg0SkY = await HTDD_contractbYDtUa4.approve.call(addressNsNFbTV, uintziHsPy5, {from: accounts[3]});
		const boolmvXyyXV = await HTDD_contractbYDtUa4.transferFrom.call(addressCByKRMs, addressxJNTeKW, uintvbgvLl9, {from: accounts[5]});
		const boolp4O9Xyp = await HTDD_contractbYDtUa4.transferFrom.call(addressgVT1Vra, addressZjerNgb, uintWVZG9vp, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractsSKeLtD = await HTDD_contract.new({from: accounts[1]});
		const uintw1EbrLa = BigInt("583")
		const addressHplmuJP = accounts[1]
		const addressnMgxFw = accounts[1]
		const uintZSow2Hq = BigInt("1731")
		const addressEkQpTEC = accounts[1]
		const uint2t9rXU = BigInt("544")
		const addressggfkB8G = accounts[1]
		const uintMU27v6n = BigInt("1793")
		const addressTePMvj = accounts[4]
		const uintoFYd1RH = BigInt("608")
		const addressMWzajw0 = accounts[3]
		const addressOvIT1oK = accounts[4]
//		const boolyGbzBXp = await HTDD_contractsSKeLtD.transferFrom.call(addressnMgxFw, addressHplmuJP, uintw1EbrLa, {from: accounts[2]});
//		const boolYbHgCbM = await HTDD_contractsSKeLtD.approve.call(addressEkQpTEC, uintZSow2Hq, {from: accounts[4]});
//		const boolZVcg7TB = await HTDD_contractsSKeLtD.transfer.call(addressggfkB8G, uint2t9rXU, {from: accounts[1]});
//		const boolpFBNTyL = await HTDD_contractsSKeLtD.approve.call(addressTePMvj, uintMU27v6n, {from: accounts[4]});
//		const boolAxGGvwp = await HTDD_contractsSKeLtD.transferFrom.call(addressOvIT1oK, addressMWzajw0, uintoFYd1RH, {from: accounts[1]});

		await expect(HTDD_contractsSKeLtD.transferFrom.call(addressnMgxFw, addressHplmuJP, uintw1EbrLa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractvXU9tNJ = await HTDD_contract.new({from: accounts[3]});
		const uintiIK7TfW = BigInt("0")
		const addressa8Sdnta = accounts[3]
		const addresswQZfNy = accounts[1]
		const addressoZoQy11 = accounts[4]
		const addressFW3555u = accounts[0]
		const uintTDW9ocZ = BigInt("334")
		const addressNucNwQj = accounts[4]
		const addressj8ANypU = "0x0000000000000000000000000000000000000001"
		const uintgpZMtRk = BigInt("863")
		const addresscqUTIcZ = accounts[1]
		const boolZY3zLgl = await HTDD_contractvXU9tNJ.transferFrom.call(addresswQZfNy, addressa8Sdnta, uintiIK7TfW, {from: accounts[1]});
		const uint256Fgr0w4d = await HTDD_contractvXU9tNJ.allowance.call(addressFW3555u, addressoZoQy11, {from: accounts[2]});
//		const boolQVHxHsP = await HTDD_contractvXU9tNJ.transferFrom.call(addressj8ANypU, addressNucNwQj, uintTDW9ocZ, {from: accounts[2]});
//		const boolKClCQL8 = await HTDD_contractvXU9tNJ.approve.call(addresscqUTIcZ, uintgpZMtRk, {from: accounts[3]});

		assert.equal(boolZY3zLgl, true)
		assert.equal(uint256Fgr0w4d, BigInt("0"))
		await expect(HTDD_contractvXU9tNJ.transferFrom.call(addressj8ANypU, addressNucNwQj, uintTDW9ocZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})