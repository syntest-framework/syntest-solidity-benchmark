const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractHyzIlZ = await MolScribe.new({from: accounts[1]});
		const transactionValuePc9N2Pd = BigInt("79")
		const buyerAwOiVHq = accounts[2]
		const tokenIdTlwJtJc = BigInt("1306")
		const tokenAddressDtJjdGb = accounts[1]
		const _molgYTennJ = accounts[5]
		const _molFeeQ6eICp = BigInt("962")
		const _molFeenj84FQP = BigInt("1555")
		await contractHyzIlZ.makeOffer.call(tokenAddressDtJjdGb, tokenIdTlwJtJc, buyerAwOiVHq, transactionValuePc9N2Pd, {from: accounts[4]});
		await contractHyzIlZ.updateMol.call(_molgYTennJ, {from: accounts[1]});
		await contractHyzIlZ.updateMolFees.call(_molFeeQ6eICp, {from: accounts[3]});
		await contractHyzIlZ.updateMolFees.call(_molFeenj84FQP, {from: accounts[4]});

		await expect(contractHyzIlZ.makeOffer.call(tokenAddressDtJjdGb, tokenIdTlwJtJc, buyerAwOiVHq, transactionValuePc9N2Pd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract87rqF4 = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesIwGipRp = BigInt("118")
		const communityAddressDAfFlyo = accounts[3]
		const tokenIdlaOBbNN = BigInt("1266")
		const tokenAddressOeIcS23 = accounts[0]
		const _molBankApuYs5W = accounts[2]
		await contract87rqF4.scribeNFT.call(tokenAddressOeIcS23, tokenIdlaOBbNN, communityAddressDAfFlyo, startingRoyaltiesIwGipRp, {from: "0x0000000000000000000000000000000000000001"});
		await contract87rqF4.updateMolBank.call(_molBankApuYs5W, {from: accounts[3]});

		await expect(contract87rqF4.scribeNFT.call(tokenAddressOeIcS23, tokenIdlaOBbNN, communityAddressDAfFlyo, startingRoyaltiesIwGipRp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracttgGHKKq = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdwD3L17g = BigInt("1028")
		const tokenAddressPLTYiZV = accounts[2]
		const startingRoyaltiesKIN1NJ4 = BigInt("134")
		const communityAddressCABIeb1 = accounts[0]
		const tokenIdyMyLgov = BigInt("727")
		const tokenAddressVPIpwU6 = accounts[3]
		const communityAddressbWLArLB = accounts[0]
		const tokenIdNZg1C3V = BigInt("546")
		const tokenAddressziEm1sS = accounts[4]
		await contracttgGHKKq.acceptOffer.call(tokenAddressPLTYiZV, tokenIdwD3L17g, {from: accounts[3]});
		await contracttgGHKKq.scribeNFT.call(tokenAddressVPIpwU6, tokenIdyMyLgov, communityAddressCABIeb1, startingRoyaltiesKIN1NJ4, {from: "0x0000000000000000000000000000000000000001"});
		await contracttgGHKKq.giftLexART.call(tokenAddressziEm1sS, tokenIdNZg1C3V, communityAddressbWLArLB, {from: accounts[0]});
	});

	it('test for MolScribe', async () => {
		const contractl0Zi9S4 = await MolScribe.new({from: accounts[1]});
		const tokenIdckrmxe0 = BigInt("1377")
		const tokenAddressiLWOYeZ = accounts[3]
		const startingRoyaltiesiYSQRNJ = BigInt("176")
		const communityAddressUM6tHDG = accounts[0]
		const tokenIdaJhdg9h = BigInt("380")
		const tokenAddresso5Q0fiX = accounts[0]
		const communityAddressVPdoiu = accounts[1]
		const tokenIdmlsfxBv = BigInt("3")
		const tokenAddressh077xSF = accounts[2]
		const _molFeeN9WVBcp = BigInt("1594")
		await contractl0Zi9S4.acceptOffer.call(tokenAddressiLWOYeZ, tokenIdckrmxe0, {from: accounts[1]});
		await contractl0Zi9S4.scribeNFT.call(tokenAddresso5Q0fiX, tokenIdaJhdg9h, communityAddressUM6tHDG, startingRoyaltiesiYSQRNJ, {from: accounts[2]});
		await contractl0Zi9S4.giftLexART.call(tokenAddressh077xSF, tokenIdmlsfxBv, communityAddressVPdoiu, {from: accounts[2]});
		await contractl0Zi9S4.updateMolFees.call(_molFeeN9WVBcp, {from: accounts[5]});

		await expect(contractl0Zi9S4.acceptOffer.call(tokenAddressiLWOYeZ, tokenIdckrmxe0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractzWcVrsG = await MolScribe.new({from: accounts[4]});
		const _molFeeAqOumE = BigInt("1213")
		const transactionValueqRbiqcV = BigInt("463")
		const buyerdZnwuQA = accounts[2]
		const tokenIdtMfHQYV = BigInt("88")
		const tokenAddressLF2Hr7b = accounts[0]
		await contractzWcVrsG.updateMolFees.call(_molFeeAqOumE, {from: accounts[0]});
		await contractzWcVrsG.makeOffer.call(tokenAddressLF2Hr7b, tokenIdtMfHQYV, buyerdZnwuQA, transactionValueqRbiqcV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractzWcVrsG.updateMolFees.call(_molFeeAqOumE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractPyKfAK0 = await MolScribe.new({from: accounts[0]});
		const communityAddressmTYdfJD = accounts[2]
		const tokenIdQovbuPn = BigInt("860")
		const tokenAddresspkndUcQ = accounts[2]
		const _molBankPuIBups = accounts[2]
		await contractPyKfAK0.giftLexART.call(tokenAddresspkndUcQ, tokenIdQovbuPn, communityAddressmTYdfJD, {from: "0x0000000000000000000000000000000000000001"});
		await contractPyKfAK0.updateMolBank.call(_molBankPuIBups, {from: accounts[3]});

		await expect(contractPyKfAK0.giftLexART.call(tokenAddresspkndUcQ, tokenIdQovbuPn, communityAddressmTYdfJD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})