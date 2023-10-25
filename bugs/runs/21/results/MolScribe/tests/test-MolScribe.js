const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractRBC3prl = await MolScribe.new({from: accounts[1]});
		const _molBankwvGw9E0 = accounts[4]
		const _molFeevOEXXOx = BigInt("1504")
		const _molBankODEWh9 = accounts[3]
		const communityAddressS1WnjA = accounts[1]
		const tokenIdbkDzMBb = BigInt("1234")
		const tokenAddressFU9sd8h = accounts[3]
		const communityAddressXLsRxmo = accounts[5]
		const tokenIdrPgEkiu = BigInt("414")
		const tokenAddressLn0wnj3 = accounts[1]
		await contractRBC3prl.updateMolBank.call(_molBankwvGw9E0, {from: accounts[3]});
		await contractRBC3prl.updateMolFees.call(_molFeevOEXXOx, {from: "0x0000000000000000000000000000000000000001"});
		await contractRBC3prl.updateMolBank.call(_molBankODEWh9, {from: accounts[3]});
		await contractRBC3prl.giftLexART.call(tokenAddressFU9sd8h, tokenIdbkDzMBb, communityAddressS1WnjA, {from: accounts[2]});
		await contractRBC3prl.giftLexART.call(tokenAddressLn0wnj3, tokenIdrPgEkiu, communityAddressXLsRxmo, {from: accounts[0]});

		await expect(contractRBC3prl.updateMolBank.call(_molBankwvGw9E0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracty4dsJzf = await MolScribe.new({from: accounts[4]});
		const transactionValueFraViea = BigInt("1189")
		const buyer75aunK = accounts[4]
		const tokenIdeQIn2i5 = BigInt("1323")
		const tokenAddressC52ahwa = accounts[4]
		const _molBankTVCh32p = accounts[5]
		const transactionValuefXeeFxO = BigInt("1154")
		const buyerl5TJfit = accounts[1]
		const tokenIdpSTL4b4 = BigInt("342")
		const tokenAddressAmQXsDa = accounts[1]
		const tokenIdWm7LOW0 = BigInt("778")
		const tokenAddressvILYvaa = accounts[2]
		const communityAddressaJfBW15 = accounts[1]
		const tokenIdvTU7864 = BigInt("1421")
		const tokenAddressnHXk7JD = "0x0000000000000000000000000000000000000001"
		await contracty4dsJzf.makeOffer.call(tokenAddressC52ahwa, tokenIdeQIn2i5, buyer75aunK, transactionValueFraViea, {from: accounts[0]});
		await contracty4dsJzf.updateMolBank.call(_molBankTVCh32p, {from: accounts[2]});
		await contracty4dsJzf.makeOffer.call(tokenAddressAmQXsDa, tokenIdpSTL4b4, buyerl5TJfit, transactionValuefXeeFxO, {from: accounts[3]});
		const nullEtGhxa3 = await contracty4dsJzf.getTokenKey.call(tokenAddressvILYvaa, tokenIdWm7LOW0, {from: "0x0000000000000000000000000000000000000001"});
		await contracty4dsJzf.giftLexART.call(tokenAddressnHXk7JD, tokenIdvTU7864, communityAddressaJfBW15, {from: accounts[0]});

		await expect(contracty4dsJzf.makeOffer.call(tokenAddressC52ahwa, tokenIdeQIn2i5, buyer75aunK, transactionValueFraViea, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfm2rLbn = await MolScribe.new({from: accounts[1]});
		const communityAddressjNil3nO = accounts[1]
		const tokenIdCMIK3NQ = BigInt("1434")
		const tokenAddressikEhMV6 = accounts[2]
		const communityAddresswbb42XU = accounts[4]
		const tokenIdimsmkiv = BigInt("1819")
		const tokenAddressnjpWbt5 = accounts[4]
		const transactionValuesrVxDzG = BigInt("932")
		const buyerBx6kr1D = accounts[3]
		const tokenIdpioY6Vw = BigInt("505")
		const tokenAddressFTjU4XH = accounts[3]
		const _molsjhIxtG = accounts[0]
		await contractfm2rLbn.giftLexART.call(tokenAddressikEhMV6, tokenIdCMIK3NQ, communityAddressjNil3nO, {from: accounts[1]});
		await contractfm2rLbn.giftLexART.call(tokenAddressnjpWbt5, tokenIdimsmkiv, communityAddresswbb42XU, {from: accounts[1]});
		await contractfm2rLbn.makeOffer.call(tokenAddressFTjU4XH, tokenIdpioY6Vw, buyerBx6kr1D, transactionValuesrVxDzG, {from: accounts[5]});
		await contractfm2rLbn.updateMol.call(_molsjhIxtG, {from: accounts[1]});

		await expect(contractfm2rLbn.giftLexART.call(tokenAddressikEhMV6, tokenIdCMIK3NQ, communityAddressjNil3nO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractEv5dFLh = await MolScribe.new({from: accounts[3]});
		const tokenIdm9tE5Xr = BigInt("234")
		const tokenAddresspIW2iG8 = accounts[5]
		const tokenIdGFFm7r2 = BigInt("1819")
		const tokenAddressIKceZV = accounts[3]
		const transactionValueATgd5F = BigInt("594")
		const buyerkHAnu3h = accounts[1]
		const tokenIdrT0UC3 = BigInt("1122")
		const tokenAddressmQ05Shw = accounts[4]
		const tokenIdXqOMU2 = BigInt("1484")
		const tokenAddressirFTfrq = "0x0000000000000000000000000000000000000001"
		await contractEv5dFLh.acceptOffer.call(tokenAddresspIW2iG8, tokenIdm9tE5Xr, {from: accounts[1]});
		const nullinnqF9G = await contractEv5dFLh.getTokenKey.call(tokenAddressIKceZV, tokenIdGFFm7r2, {from: accounts[0]});
		await contractEv5dFLh.makeOffer.call(tokenAddressmQ05Shw, tokenIdrT0UC3, buyerkHAnu3h, transactionValueATgd5F, {from: accounts[4]});
		const nullIVbpf6F = await contractEv5dFLh.getTokenKey.call(tokenAddressirFTfrq, tokenIdXqOMU2, {from: accounts[0]});

		await expect(contractEv5dFLh.acceptOffer.call(tokenAddresspIW2iG8, tokenIdm9tE5Xr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractLJ6Fv29 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIda4kgPiw = BigInt("549")
		const tokenAddressQreoqmX = accounts[0]
		const _molFeeR0bSpmx = BigInt("207")
		const transactionValuev4JQjEO = BigInt("1474")
		const buyeriqGCEb2 = accounts[0]
		const tokenIdFqlHyY = BigInt("1414")
		const tokenAddressawyj5YQ = "0x0000000000000000000000000000000000000001"
		const tokenIdEi22AjF = BigInt("1234")
		const tokenAddressx8FvpaC = accounts[1]
		const startingRoyaltiesBFou4i1 = BigInt("40")
		const communityAddresss5KlTvw = accounts[4]
		const tokenIdSsqNJx = BigInt("335")
		const tokenAddressw5zi1zn = "0x0000000000000000000000000000000000000001"
		const _molFeeDVatgkH = BigInt("1296")
		const nullAlFJz73 = await contractLJ6Fv29.getTokenKey.call(tokenAddressQreoqmX, tokenIda4kgPiw, {from: accounts[3]});
		await contractLJ6Fv29.updateMolFees.call(_molFeeR0bSpmx, {from: "0x0000000000000000000000000000000000000001"});
		await contractLJ6Fv29.makeOffer.call(tokenAddressawyj5YQ, tokenIdFqlHyY, buyeriqGCEb2, transactionValuev4JQjEO, {from: "0x0000000000000000000000000000000000000001"});
		await contractLJ6Fv29.acceptOffer.call(tokenAddressx8FvpaC, tokenIdEi22AjF, {from: accounts[5]});
		await contractLJ6Fv29.scribeNFT.call(tokenAddressw5zi1zn, tokenIdSsqNJx, communityAddresss5KlTvw, startingRoyaltiesBFou4i1, {from: accounts[3]});
		await contractLJ6Fv29.updateMolFees.call(_molFeeDVatgkH, {from: accounts[3]});
	});

	it('test for MolScribe', async () => {
		const contractyaWuKxy = await MolScribe.new({from: accounts[2]});
		const tokenIdfa6f0VK = BigInt("631")
		const tokenAddressbQM3VCv = accounts[4]
		const transactionValueXa83GyN = BigInt("79")
		const buyereJdDc7p = accounts[3]
		const tokenIdPHSdl6t = BigInt("27")
		const tokenAddresszp4NREm = accounts[0]
		const _molJs4aqXs = accounts[1]
		const tokenIdTNE65zP = BigInt("1527")
		const tokenAddressOeOydS = "0x0000000000000000000000000000000000000001"
		const tokenIdS9ExuaL = BigInt("1180")
		const tokenAddressKzws1Tv = accounts[3]
		await contractyaWuKxy.acceptOffer.call(tokenAddressbQM3VCv, tokenIdfa6f0VK, {from: accounts[3]});
		await contractyaWuKxy.makeOffer.call(tokenAddresszp4NREm, tokenIdPHSdl6t, buyereJdDc7p, transactionValueXa83GyN, {from: accounts[0]});
		await contractyaWuKxy.updateMol.call(_molJs4aqXs, {from: accounts[2]});
		await contractyaWuKxy.acceptOffer.call(tokenAddressOeOydS, tokenIdTNE65zP, {from: accounts[2]});
		await contractyaWuKxy.acceptOffer.call(tokenAddressKzws1Tv, tokenIdS9ExuaL, {from: accounts[2]});

		await expect(contractyaWuKxy.acceptOffer.call(tokenAddressbQM3VCv, tokenIdfa6f0VK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract4pRWf1 = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesU2sh1U = BigInt("197")
		const communityAddressENek2hD = accounts[4]
		const tokenIdLlW8vLG = BigInt("885")
		const tokenAddresskZXLEGU = accounts[2]
		await contract4pRWf1.scribeNFT.call(tokenAddresskZXLEGU, tokenIdLlW8vLG, communityAddressENek2hD, startingRoyaltiesU2sh1U, {from: accounts[2]});

		await expect(contract4pRWf1.scribeNFT.call(tokenAddresskZXLEGU, tokenIdLlW8vLG, communityAddressENek2hD, startingRoyaltiesU2sh1U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})