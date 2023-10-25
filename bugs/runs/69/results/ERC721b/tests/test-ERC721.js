const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractWiQWfJ = await ERC721.new({from: accounts[1]});
		const tokenIdeKkrcfS = BigInt("205")
		const tokenIdXzU8MFD = BigInt("1724")
		const tokenIdnftW26p = BigInt("687")
		const tot72LV3Y = accounts[1]
		const nullPEKNsDg = await contractWiQWfJ.getApproved.call(tokenIdeKkrcfS, {from: accounts[0]});
		const null5DQrg3 = await contractWiQWfJ.ownerOf.call(tokenIdXzU8MFD, {from: accounts[3]});
		await contractWiQWfJ.approve.call(tot72LV3Y, tokenIdnftW26p, {from: accounts[1]});

		await expect(contractWiQWfJ.getApproved.call(tokenIdeKkrcfS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfaWCG9K = await ERC721.new({from: accounts[5]});
		const approvedz23LdBc = false
		const toJSjzQtc = accounts[0]
		const ownerQLSMDMp = accounts[4]
		const approvedp4qcybI = false
		const tosdlsxeR = accounts[1]
		const approvedhlsFjz0 = true
		const tobpFFpef = accounts[2]
		const tokenIdOGgnTz = BigInt("1633")
		const tooYdikIy = accounts[1]
		await contractfaWCG9K.setApprovalForAll.call(toJSjzQtc, approvedz23LdBc, {from: accounts[0]});
		const nullV3vVDn1 = await contractfaWCG9K.balanceOf.call(ownerQLSMDMp, {from: "0x0000000000000000000000000000000000000001"});
		await contractfaWCG9K.setApprovalForAll.call(tosdlsxeR, approvedp4qcybI, {from: accounts[1]});
		await contractfaWCG9K.setApprovalForAll.call(tobpFFpef, approvedhlsFjz0, {from: accounts[4]});
		await contractfaWCG9K.approve.call(tooYdikIy, tokenIdOGgnTz, {from: accounts[4]});

		await expect(contractfaWCG9K.setApprovalForAll.call(toJSjzQtc, approvedz23LdBc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUp1d45K = await ERC721.new({from: accounts[2]});
		const operatorsHaR7Zr = accounts[4]
		const ownereOBE33Q = accounts[1]
		const tokenIdRgdLaBZ = BigInt("142")
		const operatorSX3kGBP = accounts[4]
		const ownerNzMChws = "0x0000000000000000000000000000000000000001"
		const operatorD0CkCx = accounts[0]
		const ownertLZUp4B = accounts[3]
		const nullHceNXGt = await contractUp1d45K.isApprovedForAll.call(ownereOBE33Q, operatorsHaR7Zr, {from: accounts[1]});
		const nullCDSJ4Sg = await contractUp1d45K.ownerOf.call(tokenIdRgdLaBZ, {from: accounts[2]});
		const nullf5Ks4J = await contractUp1d45K.isApprovedForAll.call(ownerNzMChws, operatorSX3kGBP, {from: accounts[3]});
		const null2gjNyA = await contractUp1d45K.isApprovedForAll.call(ownertLZUp4B, operatorD0CkCx, {from: accounts[4]});

		assert.equal(nullHceNXGt, false)
		await expect(contractUp1d45K.ownerOf.call(tokenIdRgdLaBZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjMb7j5 = await ERC721.new({from: accounts[0]});
		const tokenIdCh0xu0L = BigInt("275")
		const toeUrimuU = accounts[1]
		const fromRRSMOI1 = accounts[2]
		const ownerNxKqSc = accounts[1]
		const ownerv6es0gv = accounts[0]
		const approvedOSVCmTB = false
		const toOnctXp = accounts[0]
		await contractjMb7j5.transferFrom.call(fromRRSMOI1, toeUrimuU, tokenIdCh0xu0L, {from: accounts[4]});
		const nullUNpQwyh = await contractjMb7j5.balanceOf.call(ownerNxKqSc, {from: "0x0000000000000000000000000000000000000001"});
		const nullEQYKlsL = await contractjMb7j5.balanceOf.call(ownerv6es0gv, {from: accounts[5]});
		await contractjMb7j5.setApprovalForAll.call(toOnctXp, approvedOSVCmTB, {from: accounts[2]});

		await expect(contractjMb7j5.transferFrom.call(fromRRSMOI1, toeUrimuU, tokenIdCh0xu0L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcO9PoIu = await ERC721.new({from: accounts[5]});
		const approvedkANBIP4 = false
		const touNR98Po = accounts[2]
		const tokenIdsQZUvJ = BigInt("1216")
		const toMJFHXlA = accounts[3]
		const fromWw2KAZU = accounts[0]
		const tokenIdoLfrBi0 = BigInt("1410")
		const toOrGr92O = accounts[0]
		const from2o3HgT = "0x0000000000000000000000000000000000000001"
		const tokenIdOnyhZ7 = BigInt("476")
		const approvedKTPV7NE = false
		const toYlhVPgi = accounts[0]
		await contractcO9PoIu.setApprovalForAll.call(touNR98Po, approvedkANBIP4, {from: accounts[1]});
		await contractcO9PoIu.safeTransferFrom.call(fromWw2KAZU, toMJFHXlA, tokenIdsQZUvJ, {from: accounts[0]});
		await contractcO9PoIu.safeTransferFrom.call(from2o3HgT, toOrGr92O, tokenIdoLfrBi0, {from: accounts[4]});
		const nullekFv0P9 = await contractcO9PoIu.ownerOf.call(tokenIdOnyhZ7, {from: accounts[2]});
		await contractcO9PoIu.setApprovalForAll.call(toYlhVPgi, approvedKTPV7NE, {from: accounts[5]});

		await expect(contractcO9PoIu.setApprovalForAll.call(touNR98Po, approvedkANBIP4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLRYNRmz = await ERC721.new({from: accounts[2]});
		const ownerfvuaJjl = "0x0000000000000000000000000000000000000001"
		const _dataMnx9hg = "0x0c1e0c0f0e0e1c171c15"
		const tokenIdS4FvKo5 = BigInt("943")
		const tov54ASnv = accounts[1]
		const fromaE1ofdv = accounts[3]
		const tokenIdmN5svfl = BigInt("476")
		const nullRuDpLHg = await contractLRYNRmz.balanceOf.call(ownerfvuaJjl, {from: accounts[4]});
		await contractLRYNRmz.safeTransferFrom.call(fromaE1ofdv, tov54ASnv, tokenIdS4FvKo5, _dataMnx9hg, {from: accounts[5]});
		const nullec5yqcL = await contractLRYNRmz.ownerOf.call(tokenIdmN5svfl, {from: accounts[1]});

		assert.equal(nullRuDpLHg, 0)
		await expect(contractLRYNRmz.safeTransferFrom.call(fromaE1ofdv, tov54ASnv, tokenIdS4FvKo5, _dataMnx9hg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxPNmiKw = await ERC721.new({from: accounts[5]});
		const approvedm9ZM6nP = true
		const toFDVCBx = "0x0000000000000000000000000000000000000001"
		const tokenIdm0W5z7b = BigInt("2003")
		const toOdrAmKB = "0x0000000000000000000000000000000000000001"
		const operatorC865EHd = accounts[0]
		const ownerR8AoZcp = accounts[1]
		await contractxPNmiKw.setApprovalForAll.call(toFDVCBx, approvedm9ZM6nP, {from: accounts[0]});
		await contractxPNmiKw.approve.call(toOdrAmKB, tokenIdm0W5z7b, {from: accounts[3]});
		const nulleWC1wNz = await contractxPNmiKw.isApprovedForAll.call(ownerR8AoZcp, operatorC865EHd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractxPNmiKw.setApprovalForAll.call(toFDVCBx, approvedm9ZM6nP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractD76xmpI = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdaBvW5lW = BigInt("412")
		const ownerk9pKuip = accounts[5]
		const tokenIdeWqxuSq = BigInt("586")
		const nulldMg7ngS = await contractD76xmpI.ownerOf.call(tokenIdaBvW5lW, {from: accounts[1]});
		const nullkqvf0Ek = await contractD76xmpI.balanceOf.call(ownerk9pKuip, {from: accounts[5]});
		const nullEg7NNO = await contractD76xmpI.getApproved.call(tokenIdeWqxuSq, {from: accounts[4]});
	});
})