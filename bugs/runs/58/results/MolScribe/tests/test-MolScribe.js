const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractJAPqMtl = await MolScribe.new({from: accounts[0]});
		const tokenIdv12r3ZP = BigInt("875")
		const tokenAddressXOy3DHG = accounts[5]
		const tokenIdloIwWjR = BigInt("866")
		const tokenAddressI3WvseJ = accounts[2]
		const tokenIdtM0AbMX = BigInt("1023")
		const tokenAddressRComxf8 = accounts[3]
		const _molLgN6e3 = accounts[0]
		const _molFeeIXIKaoT = BigInt("451")
		await contractJAPqMtl.acceptOffer.call(tokenAddressXOy3DHG, tokenIdv12r3ZP, {from: accounts[3]});
		const nullfz2teZ = await contractJAPqMtl.getTokenKey.call(tokenAddressI3WvseJ, tokenIdloIwWjR, {from: accounts[4]});
		const nulllCrLn0J = await contractJAPqMtl.getTokenKey.call(tokenAddressRComxf8, tokenIdtM0AbMX, {from: accounts[1]});
		await contractJAPqMtl.updateMol.call(_molLgN6e3, {from: accounts[1]});
		await contractJAPqMtl.updateMolFees.call(_molFeeIXIKaoT, {from: accounts[0]});

		await expect(contractJAPqMtl.acceptOffer.call(tokenAddressXOy3DHG, tokenIdv12r3ZP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractQe0ct6e = await MolScribe.new({from: accounts[4]});
		const communityAddressxzsmMg7 = accounts[3]
		const tokenIdWMfZObm = BigInt("1855")
		const tokenAddressYh11OXh = accounts[0]
		const tokenIdZq2HzIt = BigInt("1235")
		const tokenAddressSElIpfK = accounts[0]
		const tokenIdGZilBHQ = BigInt("1492")
		const tokenAddressVedVMqi = accounts[2]
		const tokenIdH6EhtH = BigInt("53")
		const tokenAddressaC4wGMd = accounts[0]
		await contractQe0ct6e.giftLexART.call(tokenAddressYh11OXh, tokenIdWMfZObm, communityAddressxzsmMg7, {from: "0x0000000000000000000000000000000000000001"});
		await contractQe0ct6e.acceptOffer.call(tokenAddressSElIpfK, tokenIdZq2HzIt, {from: accounts[3]});
		await contractQe0ct6e.acceptOffer.call(tokenAddressVedVMqi, tokenIdGZilBHQ, {from: accounts[4]});
		const nullgbbvm15 = await contractQe0ct6e.getTokenKey.call(tokenAddressaC4wGMd, tokenIdH6EhtH, {from: accounts[3]});

		await expect(contractQe0ct6e.giftLexART.call(tokenAddressYh11OXh, tokenIdWMfZObm, communityAddressxzsmMg7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractPh7fn31 = await MolScribe.new({from: accounts[4]});
		const startingRoyalties3zpa60 = BigInt("52")
		const communityAddressfy4Iskr = accounts[3]
		const tokenIdE9anyqf = BigInt("890")
		const tokenAddressDIG5Xvz = "0x0000000000000000000000000000000000000001"
		const transactionValueeGfA6RQ = BigInt("851")
		const buyerriTD9z = "0x0000000000000000000000000000000000000001"
		const tokenIdUMH2AGA = BigInt("1409")
		const tokenAddressX52gfcs = accounts[1]
		const tokenId5FyEeh = BigInt("706")
		const tokenAddressHOxCuLs = accounts[1]
		await contractPh7fn31.scribeNFT.call(tokenAddressDIG5Xvz, tokenIdE9anyqf, communityAddressfy4Iskr, startingRoyalties3zpa60, {from: accounts[3]});
		await contractPh7fn31.makeOffer.call(tokenAddressX52gfcs, tokenIdUMH2AGA, buyerriTD9z, transactionValueeGfA6RQ, {from: accounts[2]});
		await contractPh7fn31.acceptOffer.call(tokenAddressHOxCuLs, tokenId5FyEeh, {from: accounts[4]});

		await expect(contractPh7fn31.scribeNFT.call(tokenAddressDIG5Xvz, tokenIdE9anyqf, communityAddressfy4Iskr, startingRoyalties3zpa60, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract28V2yB = await MolScribe.new({from: accounts[4]});
		const _molFeeZPKrdcE = BigInt("677")
		const _molFeeUgRXmQp = BigInt("676")
		const communityAddressYqh6WJb = accounts[1]
		const tokenIdskLzIT = BigInt("637")
		const tokenAddressmydHhrd = accounts[1]
		await contract28V2yB.updateMolFees.call(_molFeeZPKrdcE, {from: accounts[0]});
		await contract28V2yB.updateMolFees.call(_molFeeUgRXmQp, {from: accounts[0]});
		await contract28V2yB.giftLexART.call(tokenAddressmydHhrd, tokenIdskLzIT, communityAddressYqh6WJb, {from: accounts[2]});

		await expect(contract28V2yB.updateMolFees.call(_molFeeZPKrdcE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractu6encNd = await MolScribe.new({from: accounts[3]});
		const transactionValueMgJwN2v = BigInt("1285")
		const buyerqcDs5SV = accounts[1]
		const tokenIdu7MDS7d = BigInt("243")
		const tokenAddressyi8Rd01 = accounts[2]
		const tokenIdTbSVrfW = BigInt("81")
		const tokenAddressTQlsh3U = accounts[4]
		const startingRoyaltiesg0KPPCj = BigInt("176")
		const communityAddressx2VSWni = accounts[1]
		const tokenIdL8qoAZ4 = BigInt("901")
		const tokenAddressSHaPPMP = "0x0000000000000000000000000000000000000001"
		const startingRoyaltiesvmB4uYb = BigInt("239")
		const communityAddresstX83jef = accounts[3]
		const tokenIdRizCkhX = BigInt("2026")
		const tokenAddressBtqbV0C = accounts[0]
		await contractu6encNd.makeOffer.call(tokenAddressyi8Rd01, tokenIdu7MDS7d, buyerqcDs5SV, transactionValueMgJwN2v, {from: accounts[2]});
		await contractu6encNd.acceptOffer.call(tokenAddressTQlsh3U, tokenIdTbSVrfW, {from: accounts[4]});
		await contractu6encNd.scribeNFT.call(tokenAddressSHaPPMP, tokenIdL8qoAZ4, communityAddressx2VSWni, startingRoyaltiesg0KPPCj, {from: accounts[3]});
		await contractu6encNd.scribeNFT.call(tokenAddressBtqbV0C, tokenIdRizCkhX, communityAddresstX83jef, startingRoyaltiesvmB4uYb, {from: accounts[2]});

		await expect(contractu6encNd.makeOffer.call(tokenAddressyi8Rd01, tokenIdu7MDS7d, buyerqcDs5SV, transactionValueMgJwN2v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractBTDB9nf = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molBankSiAFwnE = "0x0000000000000000000000000000000000000001"
		const _molBankQ9hVati = accounts[0]
		await contractBTDB9nf.updateMolBank.call(_molBankSiAFwnE, {from: accounts[1]});
		await contractBTDB9nf.updateMolBank.call(_molBankQ9hVati, {from: accounts[0]});
	});
})