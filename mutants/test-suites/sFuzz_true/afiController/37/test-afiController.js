const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressgwRweS = accounts[2]
		const afiControllerzktF8x = await afiController.new(addressgwRweS, {from: accounts[4]});
		const addressM7iKKPo = "0x0000000000000000000000000000000000000001"
		const addressGL9pGKM = accounts[5]
		const addressz5hI5ML = accounts[5]
		const addressCKKlqYw = accounts[2]
		const addressAnuoLkY = accounts[1]
		const addressRl1AsPK = accounts[2]
		const uintJXFGK7q = BigInt("890")
		const addressHIqh9ub = "0x0000000000000000000000000000000000000001"
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressGL9pGKM, addressM7iKKPo, {from: accounts[2]});
//		const addressHggxG51 = await afiControllerzktF8x.withdrawAll.call(addressz5hI5ML, {from: accounts[3]});
//		const addressECaPB5E = await afiControllerzktF8x.withdrawAll.call(addressCKKlqYw, {from: "0x0000000000000000000000000000000000000001"});
//		const addressroXd2DN = await afiControllerzktF8x.revokeStrategy.call(addressRl1AsPK, addressAnuoLkY, {from: accounts[0]});
//		const addressqlL7IbQ = await afiControllerzktF8x.earn.call(addressHIqh9ub, uintJXFGK7q, {from: accounts[2]});

		await expect(afiControllerzktF8x.approveStrategy.call(addressGL9pGKM, addressM7iKKPo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmtfFha0 = accounts[1]
		const afiControllerwfh0g2g = await afiController.new(addressmtfFha0, {from: accounts[0]});
		const addresszrQHHhc = accounts[2]
		const addressJrNjbjL = accounts[0]
		const addressLDVbjnG = accounts[1]
		const addressMaJLv5l = accounts[1]
		const addressUANaEWr = accounts[2]
		const addressVUrdto = accounts[5]
		const addressMLo2OSj = await afiControllerwfh0g2g.setConverter.call(addressLDVbjnG, addressJrNjbjL, addresszrQHHhc, {from: accounts[0]});
//		const addressXX0Q34r = await afiControllerwfh0g2g.setVault.call(addressUANaEWr, addressMaJLv5l, {from: accounts[3]});
//		const addressReuxr3X = await afiControllerwfh0g2g.setStrategist.call(addressVUrdto, {from: accounts[0]});

		await expect(afiControllerwfh0g2g.setVault.call(addressUANaEWr, addressMaJLv5l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXySMhJa = accounts[4]
		const afiControllerV74j9Uh = await afiController.new(addressXySMhJa, {from: accounts[2]});
		const addressKtSdVY8 = "0x0000000000000000000000000000000000000001"
		const addressUzcVVS = accounts[4]
		const uintkCqkwuG = BigInt("871")
		const addressrqvoe70 = accounts[1]
		const addressdz7jn2 = accounts[1]
		const addressJZUrFmc = accounts[5]
		const uintrgEaExY = BigInt("415")
		const addressVUiBhPz = accounts[0]
		const uintse6mBcA = BigInt("1798")
		const addressgtyOQwE = "0x0000000000000000000000000000000000000001"
//		const address9j3f4R = await afiControllerV74j9Uh.setOneSplit.call(addressKtSdVY8, {from: accounts[4]});
//		const addressICzVW3R = await afiControllerV74j9Uh.withdrawAll.call(addressUzcVVS, {from: accounts[0]});
//		const addressHxt9rv1 = await afiControllerV74j9Uh.inCaseTokensGetStuck.call(addressrqvoe70, uintkCqkwuG, {from: accounts[2]});
//		const addressT079kXN = await afiControllerV74j9Uh.setVault.call(addressJZUrFmc, addressdz7jn2, {from: accounts[0]});
//		const addressJug3ChR = await afiControllerV74j9Uh.earn.call(addressVUiBhPz, uintrgEaExY, {from: accounts[0]});
//		const addressUIke5Xe = await afiControllerV74j9Uh.earn.call(addressgtyOQwE, uintse6mBcA, {from: accounts[2]});

		await expect(afiControllerV74j9Uh.setOneSplit.call(addressKtSdVY8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressj1ZVVwn = accounts[4]
		const afiControllerBoDLWq = await afiController.new(addressj1ZVVwn, {from: accounts[0]});
		const uintwJANoCF = BigInt("1922")
		const addressW5zPdc3 = accounts[2]
		const addressh3POLqK = accounts[0]
		const addressGGeokMs = "0x0000000000000000000000000000000000000001"
		const addressrW7dvvv = "0x0000000000000000000000000000000000000001"
		const uintA3aSp4n = BigInt("1501")
//		const addresstMtc1ok = await afiControllerBoDLWq.yearn.call(addressh3POLqK, addressW5zPdc3, uintwJANoCF, {from: accounts[2]});
//		const addressNYGTO3 = await afiControllerBoDLWq.revokeStrategy.call(addressrW7dvvv, addressGGeokMs, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPV1P6mK = await afiControllerBoDLWq.setSplit.call(uintA3aSp4n, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerBoDLWq.yearn.call(addressh3POLqK, addressW5zPdc3, uintwJANoCF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskLy2YZ = accounts[2]
		const afiControllerJCl0Lg6 = await afiController.new(addresskLy2YZ, {from: accounts[1]});
		const uintAr2Dmr = BigInt("773")
		const addressChdwk2b = accounts[0]
		const uintKhBifId = BigInt("1474")
		const addressXxQ3ReO = accounts[3]
		const uintlyhvWWC = BigInt("2046")
		const addressCffhV7D = accounts[3]
		const uintLs2rC87 = BigInt("553")
		const addressPwFcL46 = accounts[0]
		const addressbBnEvfo = accounts[2]
		const addressbOnpOhB = accounts[2]
//		const addressguE3Ym4 = await afiControllerJCl0Lg6.earn.call(addressChdwk2b, uintAr2Dmr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKzrFtAQ = await afiControllerJCl0Lg6.earn.call(addressXxQ3ReO, uintKhBifId, {from: accounts[1]});
//		const addressQ55tdfU = await afiControllerJCl0Lg6.inCaseTokensGetStuck.call(addressCffhV7D, uintlyhvWWC, {from: accounts[4]});
//		const addressXRxM0Uv = await afiControllerJCl0Lg6.yearn.call(addressbBnEvfo, addressPwFcL46, uintLs2rC87, {from: accounts[2]});
//		const addressrNLG6k9 = await afiControllerJCl0Lg6.setGovernance.call(addressbOnpOhB, {from: accounts[2]});

		await expect(afiControllerJCl0Lg6.earn.call(addressChdwk2b, uintAr2Dmr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressya6I9FS = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressya6I9FS, {from: accounts[5]});
		const addressr55UIBf = accounts[0]
		const addressqZ2qWp = accounts[2]
		const uintAdBPpV5 = BigInt("1310")
//		const addressXxe9DQZ = await afiControllerQTeJRn.revokeStrategy.call(addressqZ2qWp, addressr55UIBf, {from: accounts[4]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintAdBPpV5, {from: accounts[3]});

		await expect(afiControllerQTeJRn.revokeStrategy.call(addressqZ2qWp, addressr55UIBf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressx1oxV6C = accounts[5]
		const afiControllerPzmRKR6 = await afiController.new(addressx1oxV6C, {from: "0x0000000000000000000000000000000000000001"});
		const addressh8QnY5u = accounts[3]
		const uintkYTj7q2 = BigInt("1314")
		const address15rjPq = accounts[1]
		const addresstLJH7oc = accounts[4]
		const uint9a9SFo = BigInt("1108")
		const uintCdrxfs6 = BigInt("1272")
		const addressJvkGqdS = accounts[2]
		const addressWYzp1nk = await afiControllerPzmRKR6.withdrawAll.call(addressh8QnY5u, {from: accounts[4]});
		const uintuKgmJ0 = await afiControllerPzmRKR6.getExpectedReturn.call(addresstLJH7oc, address15rjPq, uintkYTj7q2, {from: accounts[1]});
		const uintfS2nCli = await afiControllerPzmRKR6.setSplit.call(uint9a9SFo, {from: accounts[1]});
		const uintwszGLwJ = await afiControllerPzmRKR6.setSplit.call(uintCdrxfs6, {from: accounts[5]});
		const addressd5d7aQP = await afiControllerPzmRKR6.withdrawAll.call(addressJvkGqdS, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressAVhKpsY = accounts[0]
		const afiControllerY5OMl8Z = await afiController.new(addressAVhKpsY, {from: accounts[2]});
		const uintyugAKhN = BigInt("182")
		const address1lSjKM = accounts[2]
		const addressNyKBxct = accounts[0]
		const addressRExkuca = accounts[3]
		const addressscY5sR = accounts[5]
		const addresslvBT3Cf = accounts[5]
		const addressyIFrHzw = accounts[3]
		const addressEDw7PgE = "0x0000000000000000000000000000000000000001"
		const addresshE9CLWn = accounts[1]
		const addressG0MMOXP = accounts[2]
		const addressWzKf5Q2 = "0x0000000000000000000000000000000000000001"
//		const addressPVFcHay = await afiControllerY5OMl8Z.inCaseTokensGetStuck.call(address1lSjKM, uintyugAKhN, {from: accounts[3]});
//		const addressZLbiem8 = await afiControllerY5OMl8Z.approveStrategy.call(addressRExkuca, addressNyKBxct, {from: accounts[0]});
//		const addressr6s8IN5 = await afiControllerY5OMl8Z.approveStrategy.call(addresslvBT3Cf, addressscY5sR, {from: accounts[3]});
//		const uintjzl9Cs = await afiControllerY5OMl8Z.balanceOf.call(addressyIFrHzw, {from: accounts[4]});
//		const addressiuWUr08 = await afiControllerY5OMl8Z.setVault.call(addresshE9CLWn, addressEDw7PgE, {from: accounts[0]});
//		const addressfnxiVrm = await afiControllerY5OMl8Z.revokeStrategy.call(addressWzKf5Q2, addressG0MMOXP, {from: accounts[2]});

		await expect(afiControllerY5OMl8Z.inCaseTokensGetStuck.call(address1lSjKM, uintyugAKhN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEZqUlxO = accounts[2]
		const afiControllerQTXjFWh = await afiController.new(addressEZqUlxO, {from: accounts[4]});
		const uintvKiBx7 = BigInt("1902")
		const addressX6yiFBl = accounts[1]
		const addressHXQ7uId = accounts[0]
		const addressbqJA5j8 = accounts[3]
		const addressDWFKJb6 = "0x0000000000000000000000000000000000000001"
		const addressEf6brZ = accounts[2]
		const uintqXS3clp = BigInt("867")
		const addressC3rcjJ = accounts[5]
//		const uintlGDRCC = await afiControllerQTXjFWh.getExpectedReturn.call(addressHXQ7uId, addressX6yiFBl, uintvKiBx7, {from: accounts[2]});
//		const address9c9vPP = await afiControllerQTXjFWh.setGovernance.call(addressbqJA5j8, {from: accounts[0]});
//		const addressg4UpjUb = await afiControllerQTXjFWh.withdrawAll.call(addressDWFKJb6, {from: accounts[3]});
//		const addressgbwggRt = await afiControllerQTXjFWh.setGovernance.call(addressEf6brZ, {from: accounts[3]});
//		const uintcqrxeM8 = await afiControllerQTXjFWh.setSplit.call(uintqXS3clp, {from: accounts[3]});
//		const addressNIDFtr = await afiControllerQTXjFWh.setRewards.call(addressC3rcjJ, {from: accounts[5]});

		await expect(afiControllerQTXjFWh.getExpectedReturn.call(addressHXQ7uId, addressX6yiFBl, uintvKiBx7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressORFXeSF = accounts[0]
		const afiControllerFwiaVEi = await afiController.new(addressORFXeSF, {from: accounts[2]});
		const addressU29yU1e = accounts[1]
		const addressoERTvqQ = accounts[0]
		const addressTz0NJH1 = "0x0000000000000000000000000000000000000001"
		const addressF9tnrG = accounts[5]
		const addressPJhWrq = accounts[0]
		const addressH6kQPZX = accounts[5]
//		const addressLrKTBAK = await afiControllerFwiaVEi.setGovernance.call(addressU29yU1e, {from: accounts[3]});
//		const address6UP7tI = await afiControllerFwiaVEi.setConverter.call(addressF9tnrG, addressTz0NJH1, addressoERTvqQ, {from: accounts[3]});
//		const addressepcsE5 = await afiControllerFwiaVEi.revokeStrategy.call(addressH6kQPZX, addressPJhWrq, {from: accounts[2]});

		await expect(afiControllerFwiaVEi.setGovernance.call(addressU29yU1e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressj3IJj6 = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressj3IJj6, {from: accounts[5]});
		const uintAWBMiN = BigInt("1310")
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintAWBMiN, {from: accounts[3]});

		await expect(afiControllerQTeJRn.setSplit.call(uintAWBMiN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoBHjqzQ = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressoBHjqzQ, {from: accounts[5]});
		const addressPoDueEr = accounts[2]
		const addressC1CSXm9 = accounts[0]
		const addressOB5PIag = accounts[2]
		const addressuojoqfI = accounts[5]
		const uintg7amsQg = BigInt("1309")
//		const addressGnqeux7 = await afiControllerQTeJRn.withdrawAll.call(addressPoDueEr, {from: accounts[3]});
//		const addressXxe9DQZ = await afiControllerQTeJRn.revokeStrategy.call(addressOB5PIag, addressC1CSXm9, {from: accounts[4]});
//		const addressIHqq8EW = await afiControllerQTeJRn.setOneSplit.call(addressuojoqfI, {from: accounts[2]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintg7amsQg, {from: accounts[3]});

		await expect(afiControllerQTeJRn.withdrawAll.call(addressPoDueEr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrpYcQi6 = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressrpYcQi6, {from: accounts[5]});
		const addressGc5lzL = accounts[4]
		const uintAOSULYP = BigInt("1303")
		const uinthn2n1Cz = BigInt("1694")
//		const addressibamQFT = await afiControllerQTeJRn.setStrategist.call(addressGc5lzL, {from: accounts[0]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintAOSULYP, {from: accounts[3]});
//		const uintgcU5Bv = await afiControllerQTeJRn.setSplit.call(uinthn2n1Cz, {from: accounts[0]});

		await expect(afiControllerQTeJRn.setStrategist.call(addressGc5lzL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ7OVMpS = accounts[2]
		const afiControllerzktF8x = await afiController.new(addressJ7OVMpS, {from: accounts[4]});
		const addressRCjXAik = accounts[1]
		const addresscsScZqo = accounts[5]
		const addressap9dkw = "0x0000000000000000000000000000000000000001"
		const addressa5m4aJ = accounts[3]
		const addresscNWy2Ok = accounts[2]
		const addressz3cdYS = accounts[1]
		const addressjqInNzi = accounts[2]
		const uintAEFaBBF = BigInt("890")
		const addressfjQrdqL = "0x0000000000000000000000000000000000000001"
		const addressCMSkDz9 = accounts[1]
		const addressTeruj3m = accounts[0]
//		const addressx8aWKR = await afiControllerzktF8x.setStrategy.call(addresscsScZqo, addressRCjXAik, {from: accounts[2]});
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressa5m4aJ, addressap9dkw, {from: accounts[2]});
//		const addressECaPB5E = await afiControllerzktF8x.withdrawAll.call(addresscNWy2Ok, {from: "0x0000000000000000000000000000000000000001"});
//		const addressroXd2DN = await afiControllerzktF8x.revokeStrategy.call(addressjqInNzi, addressz3cdYS, {from: accounts[0]});
//		const addressqlL7IbQ = await afiControllerzktF8x.earn.call(addressfjQrdqL, uintAEFaBBF, {from: accounts[2]});
//		const addressONUAf7l = await afiControllerzktF8x.revokeStrategy.call(addressTeruj3m, addressCMSkDz9, {from: accounts[4]});

		await expect(afiControllerzktF8x.setStrategy.call(addresscsScZqo, addressRCjXAik, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqvX9do5 = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressqvX9do5, {from: accounts[5]});
		const addressQXB8YLQ = "0x0000000000000000000000000000000000000001"
		const addressDhwptUp = "0x0000000000000000000000000000000000000001"
		const addressY4ZDbso = accounts[2]
		const addressM386HJ5 = accounts[5]
		const addressGtyTMnD = accounts[2]
		const addresspUrgV1 = accounts[0]
		const addressYKkMJ2d = accounts[0]
		const addresssfYVWGv = accounts[2]
		const uintlO4F1lB = BigInt("1293")
//		const addresshEycSdy = await afiControllerQTeJRn.inCaseStrategyTokenGetStuck.call(addressDhwptUp, addressQXB8YLQ, {from: accounts[2]});
//		const addressRz4R30f = await afiControllerQTeJRn.inCaseStrategyTokenGetStuck.call(addressM386HJ5, addressY4ZDbso, {from: accounts[5]});
//		const addressz7rQlXk = await afiControllerQTeJRn.setVault.call(addresspUrgV1, addressGtyTMnD, {from: accounts[2]});
//		const addressXxe9DQZ = await afiControllerQTeJRn.revokeStrategy.call(addresssfYVWGv, addressYKkMJ2d, {from: accounts[4]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintlO4F1lB, {from: accounts[3]});

		await expect(afiControllerQTeJRn.inCaseStrategyTokenGetStuck.call(addressDhwptUp, addressQXB8YLQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnk30vBG = accounts[1]
		const afiControllerBZEpXUL = await afiController.new(addressnk30vBG, {from: accounts[4]});
		const addressD6c1h1G = accounts[4]
		const addressHifDUCi = accounts[2]
		const uintiw1JCAE = BigInt("1160")
		const uintuck2oid = BigInt("1889")
		const addressmbxBnIA = accounts[0]
		const address0B1ijR = "0x0000000000000000000000000000000000000001"
//		const uintF9vPriV = await afiControllerBZEpXUL.balanceOf.call(addressD6c1h1G, {from: accounts[4]});
//		const addressbLl0Ttn = await afiControllerBZEpXUL.setStrategist.call(addressHifDUCi, {from: accounts[1]});
//		const uintjGAILpI = await afiControllerBZEpXUL.setSplit.call(uintiw1JCAE, {from: accounts[4]});
//		const uintRIXwBzL = await afiControllerBZEpXUL.getExpectedReturn.call(address0B1ijR, addressmbxBnIA, uintuck2oid, {from: accounts[5]});

		await expect(afiControllerBZEpXUL.balanceOf.call(addressD6c1h1G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscDxH8ZZ = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addresscDxH8ZZ, {from: accounts[5]});
		const addressa7ULIOO = accounts[4]
		const addressVfNrSn = accounts[0]
		const addressX6nqcJS = accounts[3]
		const addressW6qyyNx = accounts[4]
		const addressgMQMdFD = accounts[1]
		const addressI7tCHJ = accounts[0]
		const addressnUdb5Jc = "0x0000000000000000000000000000000000000001"
		const addressSqGwYsi = accounts[0]
		const uintGEMJFe7 = BigInt("1308")
//		const addressq1hUoNQ = await afiControllerQTeJRn.setRewards.call(addressa7ULIOO, {from: accounts[3]});
//		const addressXxe9DQZ = await afiControllerQTeJRn.revokeStrategy.call(addressX6nqcJS, addressVfNrSn, {from: accounts[4]});
//		const addressKY82Ezx = await afiControllerQTeJRn.setConverter.call(addressI7tCHJ, addressgMQMdFD, addressW6qyyNx, {from: accounts[1]});
//		const addressJq7OO4 = await afiControllerQTeJRn.revokeStrategy.call(addressSqGwYsi, addressnUdb5Jc, {from: accounts[4]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintGEMJFe7, {from: accounts[3]});

		await expect(afiControllerQTeJRn.setRewards.call(addressa7ULIOO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRHLScMl = accounts[0]
		const afiControllerFwiaVEi = await afiController.new(addressRHLScMl, {from: accounts[2]});
		const addressiFdIFdV = accounts[0]
		const address4xf6eu = accounts[5]
		const addressepcsE5 = await afiControllerFwiaVEi.revokeStrategy.call(address4xf6eu, addressiFdIFdV, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressDI9QaoH = accounts[0]
		const afiControllerFwiaVEi = await afiController.new(addressDI9QaoH, {from: accounts[2]});
		const addressyL9Rk01 = accounts[3]
		const addressU4rJIq7 = accounts[1]
		const addressfJsdcg = "0x0000000000000000000000000000000000000001"
		const addressEo9nfr = accounts[0]
		const addressBthLcdL = accounts[1]
		const addressevwcJp1 = accounts[5]
		const addressRFIP6FU = await afiControllerFwiaVEi.setGovernance.call(addressyL9Rk01, {from: accounts[2]});
//		const addressfO34ggV = await afiControllerFwiaVEi.setConverter.call(addressEo9nfr, addressfJsdcg, addressU4rJIq7, {from: accounts[4]});
//		const addressepcsE5 = await afiControllerFwiaVEi.revokeStrategy.call(addressevwcJp1, addressBthLcdL, {from: accounts[2]});

		await expect(afiControllerFwiaVEi.setConverter.call(addressEo9nfr, addressfJsdcg, addressU4rJIq7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoAGlLln = accounts[0]
		const afiControllerNVNBhJC = await afiController.new(addressoAGlLln, {from: accounts[2]});
		const uintvNJIRq = BigInt("836")
		const addressEOm6DGg = accounts[5]
		const addressXjmvCAD = accounts[2]
		const addressvEFM5N = accounts[5]
		const addressGe3E6EB = accounts[3]
//		const addressji5XneQ = await afiControllerNVNBhJC.withdraw.call(addressEOm6DGg, uintvNJIRq, {from: accounts[2]});
//		const addressQcFaKDX = await afiControllerNVNBhJC.setConverter.call(addressGe3E6EB, addressvEFM5N, addressXjmvCAD, {from: accounts[1]});

		await expect(afiControllerNVNBhJC.withdraw.call(addressEOm6DGg, uintvNJIRq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmwTskE = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressmwTskE, {from: accounts[5]});
		const uintxIzOapg = BigInt("1703")
		const addressfB7Rx1S = accounts[1]
		const addressU329itS = accounts[1]
		const addressrWotUE0 = accounts[1]
		const addressbO4ukj5 = accounts[0]
		const addressWJFChqA = accounts[0]
//		const addressQlXlN44 = await afiControllerQTeJRn.inCaseTokensGetStuck.call(addressfB7Rx1S, uintxIzOapg, {from: accounts[5]});
//		const addressGDPFOC = await afiControllerQTeJRn.setVault.call(addressrWotUE0, addressU329itS, {from: accounts[2]});
//		const addressXxe9DQZ = await afiControllerQTeJRn.revokeStrategy.call(addressWJFChqA, addressbO4ukj5, {from: accounts[4]});

		await expect(afiControllerQTeJRn.inCaseTokensGetStuck.call(addressfB7Rx1S, uintxIzOapg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbQTBwy = accounts[1]
		const afiControllerp82H76o = await afiController.new(addressbQTBwy, {from: accounts[4]});
		const addresspxpMqdv = "0x0000000000000000000000000000000000000001"
		const addressr3RQtFN = accounts[1]
		const addressck0D7PU = "0x0000000000000000000000000000000000000001"
		const addressghHNH96 = accounts[1]
		const addressw5aqhVo = accounts[5]
		const addressCjWEBoN = accounts[2]
		const uinth49H7Pk = BigInt("435")
//		const addressc6cgcn0 = await afiControllerp82H76o.inCaseStrategyTokenGetStuck.call(addressr3RQtFN, addresspxpMqdv, {from: accounts[4]});
//		const addresslXL8JKD = await afiControllerp82H76o.setStrategy.call(addressghHNH96, addressck0D7PU, {from: accounts[1]});
//		const addresst5zJZM = await afiControllerp82H76o.setVault.call(addressCjWEBoN, addressw5aqhVo, {from: accounts[1]});
//		const uintjNVDmAd = await afiControllerp82H76o.setSplit.call(uinth49H7Pk, {from: accounts[0]});

		await expect(afiControllerp82H76o.inCaseStrategyTokenGetStuck.call(addressr3RQtFN, addresspxpMqdv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCyn0PJp = accounts[2]
		const afiControllerzktF8x = await afiController.new(addressCyn0PJp, {from: accounts[4]});
		const addressUClqMji = accounts[1]
		const addressN1jagl8 = "0x0000000000000000000000000000000000000001"
		const addressypNswHe = accounts[5]
		const addressxquNnS8 = accounts[3]
		const addresscijgL6O = accounts[1]
		const addressnUBo7kQ = accounts[4]
		const addressqUdi1SV = await afiControllerzktF8x.setOneSplit.call(addressUClqMji, {from: accounts[4]});
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressypNswHe, addressN1jagl8, {from: accounts[2]});
//		const addressECaPB5E = await afiControllerzktF8x.withdrawAll.call(addressxquNnS8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressroXd2DN = await afiControllerzktF8x.revokeStrategy.call(addressnUBo7kQ, addresscijgL6O, {from: accounts[0]});

		await expect(afiControllerzktF8x.approveStrategy.call(addressypNswHe, addressN1jagl8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGdcA2O = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressGdcA2O, {from: accounts[5]});
		const addressAWw7xuS = accounts[4]
		const addresshWVeysJ = accounts[4]
		const addressxkbtCKA = await afiControllerQTeJRn.setRewards.call(addressAWw7xuS, {from: accounts[5]});
//		const addressq1hUoNQ = await afiControllerQTeJRn.setRewards.call(addresshWVeysJ, {from: accounts[3]});

		await expect(afiControllerQTeJRn.setRewards.call(addresshWVeysJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstPxdoa = accounts[2]
		const afiControllerPCJL1ml = await afiController.new(addresstPxdoa, {from: accounts[1]});
		const addresswoxyzj = accounts[3]
		const addresskesYp3y = accounts[3]
		const addressXk4FSYD = accounts[0]
		const addressWehBMOQ = accounts[4]
		const addressMnubt5C = "0x0000000000000000000000000000000000000001"
		const addressNOVatg = accounts[2]
//		const addresswyP77A8 = await afiControllerPCJL1ml.withdrawAll.call(addresswoxyzj, {from: accounts[1]});
//		const addressh3OVxC7 = await afiControllerPCJL1ml.approveStrategy.call(addressXk4FSYD, addresskesYp3y, {from: accounts[4]});
//		const addresslp9L7cf = await afiControllerPCJL1ml.setStrategist.call(addressWehBMOQ, {from: accounts[2]});
//		const addressg4vCg0R = await afiControllerPCJL1ml.revokeStrategy.call(addressNOVatg, addressMnubt5C, {from: accounts[1]});

		await expect(afiControllerPCJL1ml.withdrawAll.call(addresswoxyzj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLfqpdJV = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressLfqpdJV, {from: accounts[5]});
		const addressOYbqIE = accounts[3]
		const addressRwfkU5 = accounts[3]
//		const addressfWAVIu = await afiControllerQTeJRn.setStrategy.call(addressRwfkU5, addressOYbqIE, {from: accounts[5]});

		await expect(afiControllerQTeJRn.setStrategy.call(addressRwfkU5, addressOYbqIE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressd81DJr = accounts[2]
		const afiControllerzktF8x = await afiController.new(addressd81DJr, {from: accounts[4]});
		const uintRt1s4sd = BigInt("1451")
		const uint2p0U7R = BigInt("1832")
		const addresseVklJND = accounts[2]
		const addresspNSxnkw = "0x0000000000000000000000000000000000000001"
		const addressbcTgc6 = "0x0000000000000000000000000000000000000002"
		const addressZvkiNb5 = accounts[4]
		const uintSf9cUHp = await afiControllerzktF8x.setSplit.call(uintRt1s4sd, {from: accounts[4]});
//		const uintfqD4TRv = await afiControllerzktF8x.getExpectedReturn.call(addresspNSxnkw, addresseVklJND, uint2p0U7R, {from: accounts[5]});
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressZvkiNb5, addressbcTgc6, {from: accounts[2]});

		await expect(afiControllerzktF8x.getExpectedReturn.call(addresspNSxnkw, addresseVklJND, uint2p0U7R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuNtXHW = accounts[3]
		const afiControllerQTeJRn = await afiController.new(addressuNtXHW, {from: accounts[5]});
		const uintw4cb0nZ = BigInt("24")
		const addressEX7PBL = accounts[5]
		const addressyJpxWlu = accounts[3]
		const addressj2AWcuX = accounts[1]
		const uintMa9BiMR = BigInt("1291")
//		const addressuoiLk3 = await afiControllerQTeJRn.yearn.call(addressyJpxWlu, addressEX7PBL, uintw4cb0nZ, {from: accounts[5]});
//		const uintgh7NqZS = await afiControllerQTeJRn.balanceOf.call(addressj2AWcuX, {from: accounts[4]});
//		const uintxKbyS3E = await afiControllerQTeJRn.setSplit.call(uintMa9BiMR, {from: accounts[3]});

		await expect(afiControllerQTeJRn.yearn.call(addressyJpxWlu, addressEX7PBL, uintw4cb0nZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvZJCx1G = accounts[2]
		const afiControllerzktF8x = await afiController.new(addressvZJCx1G, {from: accounts[4]});
		const addressOd1mH82 = accounts[4]
		const addressimtde4p = accounts[4]
		const addressybAonef = accounts[2]
		const addressZK0otAA = accounts[3]
		const addressF4v2FVF = await afiControllerzktF8x.setStrategist.call(addressOd1mH82, {from: accounts[4]});
//		const uintl5u82rY = await afiControllerzktF8x.balanceOf.call(addressimtde4p, {from: accounts[4]});
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressZK0otAA, addressybAonef, {from: accounts[2]});

		await expect(afiControllerzktF8x.balanceOf.call(addressimtde4p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssVJza4t = accounts[2]
		const afiControllerzktF8x = await afiController.new(addresssVJza4t, {from: accounts[4]});
		const addressJmJjx0b = accounts[4]
		const addressV7D6Lo9 = accounts[4]
		const addressBUYF0vA = "0x0000000000000000000000000000000000000000"
		const addressADAMxfZ = accounts[3]
		const uint4TO3Ql = BigInt("1579")
		const addressHfCuVjV = accounts[2]
		const addressdnPH1l1 = accounts[5]
		const addressCnGZDfB = await afiControllerzktF8x.approveStrategy.call(addressV7D6Lo9, addressJmJjx0b, {from: accounts[4]});
//		const addressmuMr7FU = await afiControllerzktF8x.approveStrategy.call(addressADAMxfZ, addressBUYF0vA, {from: accounts[2]});
//		const addressar8ZdA = await afiControllerzktF8x.yearn.call(addressdnPH1l1, addressHfCuVjV, uint4TO3Ql, {from: accounts[1]});

		await expect(afiControllerzktF8x.approveStrategy.call(addressADAMxfZ, addressBUYF0vA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})