const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressovQm8B = accounts[1]
		const uintq41dTpK = BigInt("1992")
		const DatrixoEquityTokenk6f4Gl4 = await DatrixoEquityToken.new(addressovQm8B, uintq41dTpK, {from: accounts[1]});
		const addressuJPkX4k = accounts[4]
		const uintYdBnTaA = BigInt("1222")
		const addressxQdMyqY = accounts[0]
		const uintmLS00Zu = BigInt("1115")
		const addressDiWxYh = accounts[3]
		const addressgYXo2kk = accounts[4]
		const uintv2tKXVf = BigInt("527")
		const boolVZut5KA = await DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressuJPkX4k, {from: accounts[1]});
		const boolWLBWfpm = await DatrixoEquityTokenk6f4Gl4.transfer.call(addressxQdMyqY, uintYdBnTaA, {from: accounts[5]});
		const boolFm9quJ4 = await DatrixoEquityTokenk6f4Gl4.transferFrom.call(addressgYXo2kk, addressDiWxYh, uintmLS00Zu, {from: accounts[4]});
		const uintrUVGVbP = await DatrixoEquityTokenk6f4Gl4.setStart.call(uintv2tKXVf, {from: accounts[3]});

		await expect(DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressuJPkX4k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLuYCMza = accounts[4]
		const uintar7lWcg = BigInt("464")
		const DatrixoEquityTokenamBqJex = await DatrixoEquityToken.new(addressLuYCMza, uintar7lWcg, {from: accounts[1]});
		const addressEtpLwUV = accounts[3]
		const uintR7orYR4 = BigInt("45")
		const addressG6eakav = accounts[1]
		const uintSzIr0ZK = BigInt("795")
		const addressGLmslk8 = accounts[4]
		const uintklxey7R = BigInt("1583")
		const addressR8mHfGm = accounts[2]
		const addressEuCV8O = accounts[3]
		const boolFnGwSk3 = await DatrixoEquityTokenamBqJex.removeShareholder.call(addressEtpLwUV, {from: accounts[1]});
		const boolFyhfqhP = await DatrixoEquityTokenamBqJex.transfer.call(addressG6eakav, uintR7orYR4, {from: accounts[0]});
		const addressarrayUg7fSsO = await DatrixoEquityTokenamBqJex.getShareholdersArray.call({from: accounts[0]});
		const bool2LYb1A = await DatrixoEquityTokenamBqJex.transfer.call(addressGLmslk8, uintSzIr0ZK, {from: accounts[4]});
		const boolN04mDJv = await DatrixoEquityTokenamBqJex.transferFrom.call(addressEuCV8O, addressR8mHfGm, uintklxey7R, {from: accounts[3]});
		const addressarrayiMVO5I8 = await DatrixoEquityTokenamBqJex.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenamBqJex.removeShareholder.call(addressEtpLwUV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPol4QEi = "0x0000000000000000000000000000000000000001"
		const uintRDEmJf = BigInt("720")
		const DatrixoEquityTokensH3oslE = await DatrixoEquityToken.new(addressPol4QEi, uintRDEmJf, {from: accounts[2]});
		const addressFlNfwaT = accounts[4]
		const addressarraylkZdzUi = await DatrixoEquityTokensH3oslE.getShareholdersArray.call({from: accounts[2]});
		const boolrH3SJ1w = await DatrixoEquityTokensH3oslE.removeShareholder.call(addressFlNfwaT, {from: accounts[3]});
		await DatrixoEquityTokensH3oslE.afterStartTime.call({from: accounts[2]});

		assert.equal(addressarraylkZdzUi, )
		await expect(DatrixoEquityTokensH3oslE.removeShareholder.call(addressFlNfwaT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLwboV9p = accounts[2]
		const uintF7S3TlY = BigInt("140")
		const DatrixoEquityTokenHJCOkC8 = await DatrixoEquityToken.new(addressLwboV9p, uintF7S3TlY, {from: accounts[5]});
		const uintZKhnWcY = BigInt("1488")
		const addressz03DbN6 = accounts[1]
		const uintmjwz2TS = BigInt("2018")
		const addressjwLMXw = accounts[2]
		const addresscyL0qAa = accounts[3]
		await DatrixoEquityTokenHJCOkC8.afterStartTime.call({from: accounts[1]});
		const boolBYMrz8z = await DatrixoEquityTokenHJCOkC8.transfer.call(addressz03DbN6, uintZKhnWcY, {from: accounts[0]});
		await DatrixoEquityTokenHJCOkC8.afterStartTime.call({from: accounts[5]});
		const boolxJRONH6 = await DatrixoEquityTokenHJCOkC8.transfer.call(addressjwLMXw, uintmjwz2TS, {from: accounts[4]});
		await DatrixoEquityTokenHJCOkC8.afterStartTime.call({from: accounts[2]});
		const booldWwU1am = await DatrixoEquityTokenHJCOkC8.removeShareholder.call(addresscyL0qAa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenHJCOkC8.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnoD1vvx = accounts[3]
		const uintWKDel9g = BigInt("1718")
		const DatrixoEquityTokenqyKF4Jh = await DatrixoEquityToken.new(addressnoD1vvx, uintWKDel9g, {from: "0x0000000000000000000000000000000000000001"});
		const uintB8HmbcC = BigInt("926")
		const address93RHy4 = accounts[1]
		const uintD30eBf6 = BigInt("961")
		const uintcGlYSG = BigInt("402")
		const addressSqtHV7d = accounts[2]
		const uinth7wS1Bh = BigInt("688")
		const addresstGP1uXL = accounts[5]
		await DatrixoEquityTokenqyKF4Jh.afterStartTime.call({from: accounts[4]});
		const boolmdAVUJ = await DatrixoEquityTokenqyKF4Jh.transfer.call(address93RHy4, uintB8HmbcC, {from: "0x0000000000000000000000000000000000000001"});
		const uintWyvhyA = await DatrixoEquityTokenqyKF4Jh.setStart.call(uintD30eBf6, {from: accounts[3]});
		const boolfZIHbV = await DatrixoEquityTokenqyKF4Jh.transfer.call(addressSqtHV7d, uintcGlYSG, {from: accounts[0]});
		const boolfvRv98y = await DatrixoEquityTokenqyKF4Jh.transfer.call(addresstGP1uXL, uinth7wS1Bh, {from: accounts[1]});
		const addressarray4G91Wf = await DatrixoEquityTokenqyKF4Jh.getShareholdersArray.call({from: accounts[3]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPS3oUVr = accounts[1]
		const uintGOvGfzB = BigInt("1992")
		const DatrixoEquityTokenk6f4Gl4 = await DatrixoEquityToken.new(addressPS3oUVr, uintGOvGfzB, {from: accounts[1]});
		const uintWn7JTSU = BigInt("1268")
		const addressrXXlJIl = accounts[2]
		const uintZkNGfb1 = BigInt("527")
		const uintxnEjVjW = await DatrixoEquityTokenk6f4Gl4.setStart.call(uintWn7JTSU, {from: accounts[1]});
		const addressarrayqVUJx8e = await DatrixoEquityTokenk6f4Gl4.getShareholdersArray.call({from: accounts[1]});
		const boolVZut5KA = await DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressrXXlJIl, {from: accounts[1]});
		const uintrUVGVbP = await DatrixoEquityTokenk6f4Gl4.setStart.call(uintZkNGfb1, {from: accounts[3]});

		assert.equal(addressarrayqVUJx8e, )
		await expect(DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressrXXlJIl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnSa1UcX = accounts[1]
		const uintWeQ0ZJL = BigInt("1992")
		const DatrixoEquityTokenk6f4Gl4 = await DatrixoEquityToken.new(addressnSa1UcX, uintWeQ0ZJL, {from: accounts[1]});
		const addressHEtYlNL = "0x0000000000000000000000000000000000000000"
		const boolVZut5KA = await DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressHEtYlNL, {from: accounts[1]});

		await expect(DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressHEtYlNL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressvqrPQCK = "0x0000000000000000000000000000000000000001"
		const uintkzMJGq = BigInt("720")
		const DatrixoEquityTokensH3oslE = await DatrixoEquityToken.new(addressvqrPQCK, uintkzMJGq, {from: accounts[2]});
		const uintxuNjb70 = BigInt("1779")
		const addressikDDOEc = accounts[4]
		const addressXWFOW4V = accounts[0]
		const boolkt1ZtVY = await DatrixoEquityTokensH3oslE.transferFrom.call(addressXWFOW4V, addressikDDOEc, uintxuNjb70, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokensH3oslE.afterStartTime.call({from: accounts[2]});

		await expect(DatrixoEquityTokensH3oslE.transferFrom.call(addressXWFOW4V, addressikDDOEc, uintxuNjb70, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRT4RHav = accounts[0]
		const uintNP1eBY = BigInt("43")
		const DatrixoEquityTokends8LAHz = await DatrixoEquityToken.new(addressRT4RHav, uintNP1eBY, {from: accounts[4]});
		const uintU7ljMGk = BigInt("1746")
		const addresszknug4w = accounts[3]
		const uintYqCKJUn = BigInt("768")
		const addressD0ibjjX = accounts[4]
		const addressCrlW8HW = accounts[4]
		const uintSpziWz = BigInt("1819")
		const addressYwVGDer = accounts[3]
		const boolellcxN7 = await DatrixoEquityTokends8LAHz.transfer.call(addresszknug4w, uintU7ljMGk, {from: accounts[0]});
		await DatrixoEquityTokends8LAHz.afterStartTime.call({from: accounts[4]});
		const boolVTM3Uld = await DatrixoEquityTokends8LAHz.transferFrom.call(addressCrlW8HW, addressD0ibjjX, uintYqCKJUn, {from: accounts[0]});
		const uintkuTj5Ye = await DatrixoEquityTokends8LAHz.setStart.call(uintSpziWz, {from: accounts[4]});
		const boolzzyQK3 = await DatrixoEquityTokends8LAHz.removeShareholder.call(addressYwVGDer, {from: accounts[1]});

		assert.equal(boolellcxN7, true)
		await expect(DatrixoEquityTokends8LAHz.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressvhQL2Mu = "0x0000000000000000000000000000000000000001"
		const uintz6G54NT = BigInt("720")
		const DatrixoEquityTokensH3oslE = await DatrixoEquityToken.new(addressvhQL2Mu, uintz6G54NT, {from: accounts[2]});
		const uintokHwML1 = BigInt("1028")
		const addressFU5Gmux = accounts[3]
		const addressQmyX6Kn = "0x0000000000000000000000000000000000000001"
		const addressarrayHItEdnT = await DatrixoEquityTokensH3oslE.getShareholdersArray.call({from: accounts[0]});
		const boolHuBXcm8 = await DatrixoEquityTokensH3oslE.transferFrom.call(addressQmyX6Kn, addressFU5Gmux, uintokHwML1, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokensH3oslE.afterStartTime.call({from: accounts[2]});

		assert.equal(addressarrayHItEdnT, )
		assert.equal(boolHuBXcm8, true)
		await expect(DatrixoEquityTokensH3oslE.afterStartTime.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address0TCmVK = accounts[1]
		const uintSSXFcOr = BigInt("1992")
		const DatrixoEquityTokenk6f4Gl4 = await DatrixoEquityToken.new(address0TCmVK, uintSSXFcOr, {from: accounts[1]});
		const uintG86ukr3 = BigInt("1975")
		const addressZ6ByUuy = accounts[1]
		const uintZTssY35 = BigInt("419")
		const addresslzsoVfG = accounts[2]
		const addressEml9xV3 = accounts[3]
		const addressbQWsEVI = accounts[1]
		const boolNRHQLdG = await DatrixoEquityTokenk6f4Gl4.transfer.call(addressZ6ByUuy, uintG86ukr3, {from: accounts[1]});
		const boolmd832bK = await DatrixoEquityTokenk6f4Gl4.transferFrom.call(addressEml9xV3, addresslzsoVfG, uintZTssY35, {from: accounts[2]});
		const boolVZut5KA = await DatrixoEquityTokenk6f4Gl4.removeShareholder.call(addressbQWsEVI, {from: accounts[1]});

		await expect(DatrixoEquityTokenk6f4Gl4.transfer.call(addressZ6ByUuy, uintG86ukr3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdW6Zup4 = "0x0000000000000000000000000000000000000001"
		const uintFXMIAyl = BigInt("837")
		const DatrixoEquityTokenOJ3Pep0 = await DatrixoEquityToken.new(addressdW6Zup4, uintFXMIAyl, {from: accounts[2]});
		const uintvQlex1n = BigInt("2034")
		const addressHTTdWPs = accounts[5]
		const uintUnow46q = BigInt("287")
		const addressA4iPjLa = accounts[4]
		const addressbj34otE = accounts[1]
		const uintkXahzup = await DatrixoEquityTokenOJ3Pep0.setStart.call(uintvQlex1n, {from: "0x0000000000000000000000000000000000000001"});
		const boolX15fQ9R = await DatrixoEquityTokenOJ3Pep0.removeShareholder.call(addressHTTdWPs, {from: accounts[2]});
		await DatrixoEquityTokenOJ3Pep0.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwZvVGF = await DatrixoEquityTokenOJ3Pep0.transferFrom.call(addressbj34otE, addressA4iPjLa, uintUnow46q, {from: accounts[0]});
		await DatrixoEquityTokenOJ3Pep0.afterStartTime.call({from: accounts[3]});

		await expect(DatrixoEquityTokenOJ3Pep0.setStart.call(uintvQlex1n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})