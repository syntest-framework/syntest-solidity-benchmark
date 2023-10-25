const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressbcgnS3U = accounts[2]
		const uintKXXzvEw = BigInt("1822")
		const DatrixoEquityTokenudQx6w9 = await DatrixoEquityToken.new(addressbcgnS3U, uintKXXzvEw, {from: accounts[3]});
		const uintoehEyKA = BigInt("1137")
		const uintsExp92A = await DatrixoEquityTokenudQx6w9.setStart.call(uintoehEyKA, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenudQx6w9.onlyOwner.call({from: accounts[2]});
		await DatrixoEquityTokenudQx6w9.afterStartTime.call({from: accounts[4]});
		const addressarrayy1FtpC8 = await DatrixoEquityTokenudQx6w9.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenudQx6w9.setStart.call(uintoehEyKA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbDfSGkL = accounts[2]
		const uintoFCar9Y = BigInt("253")
		const DatrixoEquityTokenjzdJCbo = await DatrixoEquityToken.new(addressbDfSGkL, uintoFCar9Y, {from: "0x0000000000000000000000000000000000000001"});
		const uintctVCQln = BigInt("98")
		const addressb3nL42A = accounts[3]
		const addressWiBjFf = accounts[3]
		const boolhFktq4z = await DatrixoEquityTokenjzdJCbo.transfer.call(addressb3nL42A, uintctVCQln, {from: accounts[3]});
		const boolVguS6F3 = await DatrixoEquityTokenjzdJCbo.removeShareholder.call(addressWiBjFf, {from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUn9Ekjy = accounts[1]
		const uintRa3K6Mi = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressUn9Ekjy, uintRa3K6Mi, {from: accounts[0]});
		const addressvawrSQq = accounts[4]
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[2]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressvawrSQq, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresstXrZ67Y = accounts[0]
		const uintzH3L0B8 = BigInt("1528")
		const DatrixoEquityTokenzLrroYY = await DatrixoEquityToken.new(addresstXrZ67Y, uintzH3L0B8, {from: accounts[4]});
		const uintqbYlaKz = BigInt("1570")
		const uintX3Vb4uV = BigInt("1722")
		const addressy6TZy4r = accounts[3]
		const addressKyql95G = accounts[1]
		const uinti34mf16 = BigInt("1623")
		const addressUxR1vXL = accounts[1]
		const address4cN2uo = accounts[3]
		const addresscBFytn = accounts[0]
		const uintQoANFr = await DatrixoEquityTokenzLrroYY.setStart.call(uintqbYlaKz, {from: accounts[0]});
		await DatrixoEquityTokenzLrroYY.onlyOwner.call({from: accounts[1]});
		const boolJ09tKjw = await DatrixoEquityTokenzLrroYY.transferFrom.call(addressKyql95G, addressy6TZy4r, uintX3Vb4uV, {from: accounts[4]});
		const boolQOpUZb = await DatrixoEquityTokenzLrroYY.transferFrom.call(address4cN2uo, addressUxR1vXL, uinti34mf16, {from: accounts[1]});
		const boolAcDVZLs = await DatrixoEquityTokenzLrroYY.removeShareholder.call(addresscBFytn, {from: accounts[1]});

		await expect(DatrixoEquityTokenzLrroYY.setStart.call(uintqbYlaKz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqnWGkHT = accounts[1]
		const uintImBXbIy = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressqnWGkHT, uintImBXbIy, {from: accounts[0]});
		const uinttlmret4 = BigInt("378")
		const addressLlVnn8x = accounts[0]
		const addressAfCEuZP = accounts[3]
		const addresszKXrOWw = accounts[4]
		const boolvDGUXlT = await DatrixoEquityTokenHZtjnqf.transferFrom.call(addressAfCEuZP, addressLlVnn8x, uinttlmret4, {from: accounts[1]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]});
		const addressarrayvOqLNG = await DatrixoEquityTokenHZtjnqf.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addresszKXrOWw, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenHZtjnqf.transferFrom.call(addressAfCEuZP, addressLlVnn8x, uinttlmret4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQq15wwh = accounts[1]
		const uintRsmz4oX = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressQq15wwh, uintRsmz4oX, {from: accounts[0]});
		const uintrbjADFb = BigInt("378")
		const addresslhgGMJ = accounts[0]
		const address6jYo10 = accounts[1]
		const addressszATBlH = "0x0000000000000000000000000000000000000001"
		const addressUeRnNB = accounts[4]
		const boolvDGUXlT = await DatrixoEquityTokenHZtjnqf.transferFrom.call(address6jYo10, addresslhgGMJ, uintrbjADFb, {from: accounts[1]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]});
		const addressarrayvOqLNG = await DatrixoEquityTokenHZtjnqf.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]});
		const boolic2Dv29 = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressszATBlH, {from: accounts[1]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressUeRnNB, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		assert.equal(boolvDGUXlT, true)
		await expect(DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTOVjp17 = accounts[1]
		const uint0uW424 = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressTOVjp17, uint0uW424, {from: accounts[0]});
		const uintzVoxEZ0 = BigInt("378")
		const addresssOlJvsH = accounts[0]
		const addressqg794D = accounts[1]
		const addressRMHntYF = "0x0000000000000000000000000000000000000000"
		const addressqreMnO2 = accounts[4]
		const boolvDGUXlT = await DatrixoEquityTokenHZtjnqf.transferFrom.call(addressqg794D, addresssOlJvsH, uintzVoxEZ0, {from: accounts[1]});
		const addressarrayvOqLNG = await DatrixoEquityTokenHZtjnqf.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]});
		const boolic2Dv29 = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressRMHntYF, {from: accounts[1]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressqreMnO2, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		assert.equal(addressarrayvOqLNG, )
		assert.equal(boolvDGUXlT, true)
		await expect(DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresscLgara = accounts[1]
		const uintQyzJCeB = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addresscLgara, uintQyzJCeB, {from: accounts[0]});
		const uintXaTPDrc = BigInt("842")
		const addressJsnJmPH = accounts[2]
		const uinthv9qV7 = BigInt("361")
		const addressO0N0fnm = accounts[0]
		const addressSPz8QUZ = accounts[1]
		const addressM0PmWGN = accounts[1]
		const addresstCmjSnx = accounts[1]
		const addressESNCU9s = accounts[4]
		const boolMIXSXix = await DatrixoEquityTokenHZtjnqf.transfer.call(addressJsnJmPH, uintXaTPDrc, {from: accounts[1]});
		const boolvDGUXlT = await DatrixoEquityTokenHZtjnqf.transferFrom.call(addressSPz8QUZ, addressO0N0fnm, uinthv9qV7, {from: accounts[1]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]});
		const addressarrayvOqLNG = await DatrixoEquityTokenHZtjnqf.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[0]});
		const boolic2Dv29 = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressM0PmWGN, {from: accounts[1]});
		const boolfiFyslc = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addresstCmjSnx, {from: accounts[0]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressESNCU9s, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		assert.equal(boolMIXSXix, true)
		assert.equal(boolvDGUXlT, true)
		await expect(DatrixoEquityTokenHZtjnqf.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressjAkL5Bz = accounts[1]
		const uintdrI4sgz = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressjAkL5Bz, uintdrI4sgz, {from: accounts[0]});
		const addressmD8Envw = accounts[1]
		const uintqVjDLLF = BigInt("378")
		const addressuUW3Pl5 = accounts[0]
		const addresspuWqixt = accounts[1]
		const addressMJMcboP = accounts[1]
		const booluZF22WY = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressmD8Envw, {from: accounts[1]});
		const boolvDGUXlT = await DatrixoEquityTokenHZtjnqf.transferFrom.call(addresspuWqixt, addressuUW3Pl5, uintqVjDLLF, {from: accounts[1]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressMJMcboP, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenHZtjnqf.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressmD8Envw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressB41k1HR = accounts[1]
		const uintMGdb7bq = BigInt("1496")
		const DatrixoEquityTokenHZtjnqf = await DatrixoEquityToken.new(addressB41k1HR, uintMGdb7bq, {from: accounts[0]});
		const uint7N0Ddu = BigInt("992")
		const addressbeokTF = accounts[1]
		const addressKqNfVB3 = accounts[1]
		const addressxoWhzo = accounts[2]
		const boolGi65nK = await DatrixoEquityTokenHZtjnqf.transfer.call(addressbeokTF, uint7N0Ddu, {from: accounts[1]});
		const booluZF22WY = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressKqNfVB3, {from: accounts[1]});
		const boolYdNIXTf = await DatrixoEquityTokenHZtjnqf.removeShareholder.call(addressxoWhzo, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayX5vRgKw = await DatrixoEquityTokenHZtjnqf.getShareholdersArray.call({from: accounts[1]});

		await expect(DatrixoEquityTokenHZtjnqf.transfer.call(addressbeokTF, uint7N0Ddu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})