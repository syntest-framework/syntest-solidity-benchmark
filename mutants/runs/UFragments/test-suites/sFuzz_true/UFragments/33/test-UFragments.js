const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsJUZ6wnO = await UFragments.new({from: accounts[0]});
		const intSV2TUm6 = BigInt("684")
		const uintEaiv4X = BigInt("237")
		const stringi4n5IW = "kRAbmecFeDtIECRu5pJYOBrsNUI2d28rFCBoYRLoeEWSEGnmYGWR"
		const stringPwhQPY = "bTSBGVxyd"
		const stringN4qutlE = await UFragmentsJUZ6wnO.name.call({from: "0x0000000000000000000000000000000000000001"});
		const int256wPKq1W2 = await UFragmentsJUZ6wnO.abs.call(intSV2TUm6, {from: accounts[2]});
		const stringo4VODvH = await UFragmentsJUZ6wnO.initialize.call(stringPwhQPY, stringi4n5IW, uintEaiv4X, {from: accounts[0]});
		await UFragmentsJUZ6wnO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Liti7ei = await UFragmentsJUZ6wnO.totalSupply.call({from: accounts[2]});

		assert.equal(stringN4qutlE, "")
		await expect(UFragmentsJUZ6wnO.abs.call(intSV2TUm6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaqWLwOb = await UFragments.new({from: accounts[2]});
		const uintVL4jj6H = BigInt("7")
		const stringsESW4KH = "3vQAOQ5hqm13C"
		const stringpzqtV4e = "qAhBgoUmiIDuhjggdUe2Vq1McV1ExpCcNnC2LKHXe"
		const uint256TkOAcOV = await UFragmentsaqWLwOb.calRebase.call({from: accounts[4]});
		const stringA4zHZAa = await UFragmentsaqWLwOb.initialize.call(stringpzqtV4e, stringsESW4KH, uintVL4jj6H, {from: accounts[0]});

		await expect(UFragmentsaqWLwOb.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJX2EGb = await UFragments.new({from: accounts[1]});
		const addressjXNFwbU = accounts[2]
		const addressww9a2Oa = accounts[2]
		const addresskJ5AuhG = accounts[2]
		const intdW76vC = BigInt("444")
		const intFexRstn = BigInt("-1298")
		const addressTKOe3pJ = accounts[4]
		const intYmb3ICI = BigInt("1637")
		const intABiV31b = BigInt("-353")
		const addressbuuMR05 = await UFragmentsJX2EGb.transferOwnership.call(addressjXNFwbU, {from: accounts[1]});
		const uint256OEzp0OY = await UFragmentsJX2EGb.allowance.call(addresskJ5AuhG, addressww9a2Oa, {from: accounts[2]});
		const int256xxfKGIN = await UFragmentsJX2EGb.add.call(intFexRstn, intdW76vC, {from: accounts[0]});
		const addressnYGJmEC = await UFragmentsJX2EGb.initialize.call(addressTKOe3pJ, {from: "0x0000000000000000000000000000000000000001"});
		const int256Zcyfx7R = await UFragmentsJX2EGb.add.call(intABiV31b, intYmb3ICI, {from: accounts[3]});

		await expect(UFragmentsJX2EGb.transferOwnership.call(addressjXNFwbU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsf7fLYK1 = await UFragments.new({from: accounts[3]});
		const uintx6Vup8 = BigInt("1113")
		const addresssDl6vmN = accounts[4]
		const intco5CgI = BigInt("-1344")
		const address93pPDT = accounts[1]
		const addressyOWOqQW = accounts[1]
		const boolvXipTtR = await UFragmentsf7fLYK1.transfer.call(addresssDl6vmN, uintx6Vup8, {from: accounts[1]});
		const int256tBbRwhx = await UFragmentsf7fLYK1.abs.call(intco5CgI, {from: accounts[4]});
		const uint25680SMBT = await UFragmentsf7fLYK1.allowance.call(addressyOWOqQW, address93pPDT, {from: accounts[5]});
		const uint256j9oD1Jy = await UFragmentsf7fLYK1.calRebase.call({from: accounts[1]});

		await expect(UFragmentsf7fLYK1.transfer.call(addresssDl6vmN, uintx6Vup8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswFAeT22 = await UFragments.new({from: accounts[0]});
		const addressgG1i6au = "0x0000000000000000000000000000000000000001"
		const addressX6EkQ2g = accounts[5]
		const intYRDVEm2 = BigInt("-560")
		const intV5EYjEs = BigInt("-466")
		const booljJHe81P = await UFragmentswFAeT22.rebaseTimeInfo.call({from: accounts[1]});
		await UFragmentswFAeT22.renounceOwnership.call({from: accounts[3]});
		const uint256a57Xlw = await UFragmentswFAeT22.allowance.call(addressX6EkQ2g, addressgG1i6au, {from: accounts[5]});
		const int256KXkKtj5 = await UFragmentswFAeT22.mul.call(intV5EYjEs, intYRDVEm2, {from: accounts[1]});

		await expect(UFragmentswFAeT22.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrCHQBOM = await UFragments.new({from: accounts[4]});
		const uinthgA52SQ = BigInt("42")
		const addressNNIsNnX = accounts[2]
		const addresswLqEZ08 = accounts[4]
		const addresspG3cj0 = accounts[1]
		const boolYlUqAJ5 = await UFragmentsrCHQBOM.isOwner.call({from: accounts[4]});
		const boollLd6QvA = await UFragmentsrCHQBOM.transferFrom.call(addresswLqEZ08, addressNNIsNnX, uinthgA52SQ, {from: accounts[4]});
		const uint256X9hWAgl = await UFragmentsrCHQBOM.balanceOf.call(addresspG3cj0, {from: accounts[0]});

		assert.equal(boolYlUqAJ5, false)
		await expect(UFragmentsrCHQBOM.transferFrom.call(addresswLqEZ08, addressNNIsNnX, uinthgA52SQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrCHQBOM = await UFragments.new({from: accounts[4]});
		const uintpKxkl3M = BigInt("718")
		const addressQuvbVp7 = accounts[4]
		const addressCYIVWhi = accounts[1]
		const boolYlUqAJ5 = await UFragmentsrCHQBOM.isOwner.call({from: accounts[4]});
		const boolfwfML4d = await UFragmentsrCHQBOM.approve.call(addressQuvbVp7, uintpKxkl3M, {from: accounts[0]});
		const uint256X9hWAgl = await UFragmentsrCHQBOM.balanceOf.call(addressCYIVWhi, {from: accounts[0]});

		assert.equal(boolYlUqAJ5, false)
		assert.equal(boolfwfML4d, true)
		assert.equal(uint256X9hWAgl, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsaqWLwOb = await UFragments.new({from: accounts[2]});
		const uintgpmmFzQ = BigInt("7")
		const stringsESW4KH = "3vQAOQ5hqm13C"
		const stringpzqtV4e = "qAhBgoUmiIDuhjggdUe2Vq1McV1ExpCcNnC2LKHXe"
		const stringA4zHZAa = await UFragmentsaqWLwOb.initialize.call(stringpzqtV4e, stringsESW4KH, uintgpmmFzQ, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsrCHQBOM = await UFragments.new({from: accounts[4]});
		const addressBivcZI8 = accounts[1]
		const addressF1uwQsy = accounts[2]
		const addressZKZRIqR = "0x0000000000000000000000000000000000000001"
		const intqJL3tmB = BigInt("-541")
		const intdLwfm9 = BigInt("1533")
		const boolYlUqAJ5 = await UFragmentsrCHQBOM.isOwner.call({from: accounts[4]});
		const uint256X9hWAgl = await UFragmentsrCHQBOM.balanceOf.call(addressBivcZI8, {from: accounts[0]});
		const uint256EWFZpK9 = await UFragmentsrCHQBOM.balanceOf.call(addressF1uwQsy, {from: accounts[0]});
		const addresstUdasEq = await UFragmentsrCHQBOM.initialize.call(addressZKZRIqR, {from: accounts[0]});
		const int256vTezSFa = await UFragmentsrCHQBOM.sub.call(intdLwfm9, intqJL3tmB, {from: accounts[1]});

		assert.equal(boolYlUqAJ5, false)
		assert.equal(uint256EWFZpK9, BigInt("0"))
		assert.equal(uint256X9hWAgl, BigInt("0"))
		await expect(UFragmentsrCHQBOM.initialize.call(addressZKZRIqR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrCHQBOM = await UFragments.new({from: accounts[4]});
		const addressXKYjmm = accounts[4]
		const addressjoSLWUN = accounts[3]
		const addresshkbvPU = accounts[0]
		const uint256Xo65kt = await UFragmentsrCHQBOM.allowance.call(addressjoSLWUN, addressXKYjmm, {from: accounts[5]});
		const uint256cI9ASqY = await UFragmentsrCHQBOM.calRebase.call({from: accounts[1]});
		const stringixEmm1O = await UFragmentsrCHQBOM.name.call({from: accounts[1]});
		const uint256X9hWAgl = await UFragmentsrCHQBOM.balanceOf.call(addresshkbvPU, {from: accounts[0]});

		assert.equal(uint256Xo65kt, BigInt("0"))
		await expect(UFragmentsrCHQBOM.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPM70LD = await UFragments.new({from: accounts[0]});
		const uinteQoSLv3 = BigInt("1412")
		const addressx45i6UC = accounts[0]
		const uint256Dtyryds = await UFragmentsPM70LD.totalSupply.call({from: accounts[2]});
		const addressWTykDjJ = await UFragmentsPM70LD.initRebase.call(addressx45i6UC, uinteQoSLv3, {from: accounts[3]});
		const uint256IOTpQw = await UFragmentsPM70LD.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8sm5NXmF = await UFragmentsPM70LD.decimals.call({from: accounts[0]});

		assert.equal(uint256Dtyryds, BigInt("0"))
		await expect(UFragmentsPM70LD.initRebase.call(addressx45i6UC, uinteQoSLv3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaqWLwOb = await UFragments.new({from: accounts[2]});
		const addresswIGS5EQ = accounts[5]
		const uintbLPHTc0 = BigInt("7")
		const stringsESW4KH = "3vQAHOQ5hqm13C"
		const stringpzqtV4e = "qAhBgoUmiIDuhjggdUe2Vq1McV1ExpCcNnC2LKHXe"
		const uint256Ef4xAa3 = await UFragmentsaqWLwOb.balanceOf.call(addresswIGS5EQ, {from: accounts[1]});
		const uint8XbqeSY = await UFragmentsaqWLwOb.decimals.call({from: accounts[2]});
		const stringA4zHZAa = await UFragmentsaqWLwOb.initialize.call(stringpzqtV4e, stringsESW4KH, uintbLPHTc0, {from: accounts[0]});

		assert.equal(uint256Ef4xAa3, BigInt("0"))
		assert.equal(uint8XbqeSY, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsrCHQBOM = await UFragments.new({from: accounts[4]});
		const addressaxCLgn5 = accounts[1]
		const addressHJtB3AP = accounts[1]
		const intrrjw95e = BigInt("801")
		const uint256X9hWAgl = await UFragmentsrCHQBOM.balanceOf.call(addressaxCLgn5, {from: accounts[0]});
		const stringFd05OXg = await UFragmentsrCHQBOM.symbol.call({from: accounts[1]});
		const uint256zZmjPq = await UFragmentsrCHQBOM.balanceOf.call(addressHJtB3AP, {from: accounts[4]});
		const int256qJB6oX = await UFragmentsrCHQBOM.abs.call(intrrjw95e, {from: accounts[2]});

		assert.equal(stringFd05OXg, "")
		assert.equal(uint256X9hWAgl, BigInt("0"))
		assert.equal(uint256zZmjPq, BigInt("0"))
		await expect(UFragmentsrCHQBOM.abs.call(intrrjw95e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseiVy0mR = await UFragments.new({from: accounts[0]});
		const uint8v8egYCy = await UFragmentseiVy0mR.decimals.call({from: accounts[2]});
		const addressatx8gQj = await UFragmentseiVy0mR.owner.call({from: accounts[1]});
		const uint8xx95iU4 = await UFragmentseiVy0mR.decimals.call({from: accounts[2]});

		assert.equal(addressatx8gQj, 0x0000000000000000000000000000000000000000)
		assert.equal(uint8v8egYCy, BigInt("0"))
		assert.equal(uint8xx95iU4, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsvZfC6v = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintL7N1NY = BigInt("489")
		const addressLt6wF6 = accounts[1]
		const uint8Kx8OTg7 = await UFragmentsvZfC6v.decimals.call({from: accounts[1]});
		const boolbj8pJM0 = await UFragmentsvZfC6v.transfer.call(addressLt6wF6, uintL7N1NY, {from: accounts[3]});
		const uint256jKmL7yx = await UFragmentsvZfC6v.totalSupply.call({from: accounts[2]});
	});
})