const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringA0wdiUb = "GPNayMjBsgXQoTlHu"
		const stringrOCgWuB = "FSmyh1mQas7KC30i2H7Js4jdiYuffjkQRDcW8FnpmrOlqcpWSlkSeDALHU"
		const uintvOFGX8Y = BigInt("968")
		const DipexUzJ0J8i = await Dipex.new(stringA0wdiUb, stringrOCgWuB, uintvOFGX8Y, {from: accounts[1]});
		const uintBbr5f3E = BigInt("244")
		const addressnQ9ukgg = accounts[2]
		const addressc7csJGl = "0x0000000000000000000000000000000000000001"
		const uintfLRe1bO = BigInt("1839")
		const addresskkchxYw = accounts[5]
		const uintN9sxJ93 = BigInt("1082")
		const addressx4UduuZ = accounts[1]
		const uintjjcSUOg = BigInt("135")
		const addressU9xMHRe = accounts[2]
//		const boolA2P57SL = await DipexUzJ0J8i.transferFrom.call(addressc7csJGl, addressnQ9ukgg, uintBbr5f3E, {from: accounts[0]});
//		const boolCF4AAR0 = await DipexUzJ0J8i.approveAndCall.call(addresskkchxYw, uintfLRe1bO, {from: accounts[1]});
//		const boolD9TvFZ5 = await DipexUzJ0J8i.approve.call(addressx4UduuZ, uintN9sxJ93, {from: accounts[4]});
//		const boollkQZFBY = await DipexUzJ0J8i.approve.call(addressU9xMHRe, uintjjcSUOg, {from: accounts[4]});

		await expect(DipexUzJ0J8i.transferFrom.call(addressc7csJGl, addressnQ9ukgg, uintBbr5f3E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringYd6WrbL = "CkKvbZvx2CgMxt"
		const stringMFBGFF0 = "rVlb5fGcQSXDK"
		const uintY6iLXwf = BigInt("946")
		const DipexHtwisbf = await Dipex.new(stringYd6WrbL, stringMFBGFF0, uintY6iLXwf, {from: accounts[3]});
		const uintb1ph8Zp = BigInt("1214")
		const addressmQTUWMe = accounts[4]
		const uintjFXHmYX = BigInt("971")
		const addressSZ1ZwiX = accounts[3]
		const uintRY5KZYs = BigInt("772")
		const addresstXc68Zh = accounts[5]
		const address7jGtZk = accounts[1]
		const boolmaTAweZ = await DipexHtwisbf.approve.call(addressmQTUWMe, uintb1ph8Zp, {from: accounts[3]});
//		const boolXzKRdhc = await DipexHtwisbf.transfer.call(addressSZ1ZwiX, uintjFXHmYX, {from: accounts[5]});
//		const boolX31QgYv = await DipexHtwisbf.approve.call(addresstXc68Zh, uintRY5KZYs, {from: accounts[3]});
//		const boold26fpM = await DipexHtwisbf.transferownership.call(address7jGtZk, {from: accounts[3]});

		assert.equal(boolmaTAweZ, true)
		await expect(DipexHtwisbf.transfer.call(addressSZ1ZwiX, uintjFXHmYX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringKIcJN8 = "df7okipm0ecDfF7Xm1BtQ97anUu97P87imdDDSCUCVQCpuDBQecIz37FEbCP1u"
		const stringw6SVdUj = "YrzuXuM6mfrMmjIBH6FgzIbQwQCpMd2aDqo2j045CxixCMR1XfHYWMdgaCnpkKlF"
		const uintrH23gDh = BigInt("1853")
		const DipexTVqpyU = await Dipex.new(stringKIcJN8, stringw6SVdUj, uintrH23gDh, {from: "0x0000000000000000000000000000000000000001"});
		const uintcwsyqTR = BigInt("347")
		const addressUA18UV = accounts[4]
		const address9Cra9U = accounts[0]
		const uintFa7lRHP = BigInt("737")
		const addressQaToDK = accounts[5]
		const uintTbPhURn = BigInt("1767")
		const addressC2yMZNV = accounts[0]
		const boolaOY85zj = await DipexTVqpyU.transferFrom.call(address9Cra9U, addressUA18UV, uintcwsyqTR, {from: accounts[2]});
		const boolsLkiy7y = await DipexTVqpyU.approveAndCall.call(addressQaToDK, uintFa7lRHP, {from: accounts[1]});
		const bool6f5sK2 = await DipexTVqpyU.approve.call(addressC2yMZNV, uintTbPhURn, {from: accounts[0]});
	});

	it('test for Dipex', async () => {
		const stringhBOyFmT = "YDA"
		const stringVDaQLOz = "7YllYcyjIAY5GMYsTH3itpFW7wVs2XQqXad88wXrGLD7APIfpkwWuzXOl9IoFQpYpLsXDQ1QKb92FViHaDpt"
		const uintixAoetn = BigInt("987")
		const DipexmMCFYnv = await Dipex.new(stringhBOyFmT, stringVDaQLOz, uintixAoetn, {from: accounts[5]});
		const uintU5R2IKj = BigInt("1323")
		const addressL0Wsuba = accounts[4]
		const uintBwDGhWO = BigInt("1196")
		const addressZA877Ef = accounts[4]
		const uintShFTQ5W = BigInt("1992")
		const addresssqupLAo = accounts[1]
		const uintO23ZyZN = BigInt("1610")
		const addressqaBT1MS = "0x0000000000000000000000000000000000000001"
//		const boolJf1jkz9 = await DipexmMCFYnv.transfer.call(addressL0Wsuba, uintU5R2IKj, {from: accounts[0]});
//		const booltAorKwX = await DipexmMCFYnv.approveAndCall.call(addressZA877Ef, uintBwDGhWO, {from: accounts[0]});
//		const bool86AAnu = await DipexmMCFYnv.transfer.call(addresssqupLAo, uintShFTQ5W, {from: accounts[5]});
//		const boolEicJKud = await DipexmMCFYnv.approveAndCall.call(addressqaBT1MS, uintO23ZyZN, {from: accounts[2]});

		await expect(DipexmMCFYnv.transfer.call(addressL0Wsuba, uintU5R2IKj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrBJk6R7 = "H6d6qQyiSpTlQ3o3"
		const stringwWHU4jL = "e1R2h3lNhlusv2zySjD6UgqG3s1"
		const uintYn6CR0 = BigInt("1274")
		const DipexqVYRdT1 = await Dipex.new(stringrBJk6R7, stringwWHU4jL, uintYn6CR0, {from: accounts[5]});
		const uints9Xg7HA = BigInt("447")
		const addressR201xz = accounts[2]
		const uinto99LKxj = BigInt("1442")
		const addressSVZApaV = accounts[3]
		const boolaU3vWU = await DipexqVYRdT1.approve.call(addressR201xz, uints9Xg7HA, {from: accounts[3]});
		const boolEvyfJ0a = await DipexqVYRdT1.approveAndCall.call(addressSVZApaV, uinto99LKxj, {from: accounts[5]});

		assert.equal(boolEvyfJ0a, true)
		assert.equal(boolaU3vWU, true)
	});

	it('test for Dipex', async () => {
		const stringdBPVmJm = "iJVGOejBt9TqXceWjEHoiQSrvLJosroyjao0AaHyvnvXiv7C3SRCEEU4xJyPURVj3UV3HRV6HemPEP9jqNSPs"
		const stringPYffwqi = "K9AngwCNIy45wKDBKEVYyxLzwVfESHXMUC3Sp1UEijWqHMA57nP65oCiTPKv"
		const uintNMEYQ0M = BigInt("568")
		const DipexJtZuu8Z = await Dipex.new(stringdBPVmJm, stringPYffwqi, uintNMEYQ0M, {from: accounts[3]});
		const uintGj2j4A7 = BigInt("1258")
		const addressMMzdss = accounts[4]
		const addressuMRXALJ = accounts[4]
		const uintUKHtxYW = BigInt("1239")
		const addressD8P1Jh9 = "0x0000000000000000000000000000000000000001"
		const addressICo4v7f = accounts[3]
		const uinthjzQGwB = BigInt("820")
		const addresssc7kON3 = accounts[1]
		const booleE08faZ = await DipexJtZuu8Z.approveAndCall.call(addressMMzdss, uintGj2j4A7, {from: accounts[3]});
		const boolJMb5gIO = await DipexJtZuu8Z.transferownership.call(addressuMRXALJ, {from: accounts[3]});
		const boolU0tDCSP = await DipexJtZuu8Z.transferFrom.call(addressICo4v7f, addressD8P1Jh9, uintUKHtxYW, {from: accounts[3]});
		const boolDVFfzmg = await DipexJtZuu8Z.approve.call(addresssc7kON3, uinthjzQGwB, {from: accounts[0]});

		assert.equal(boolDVFfzmg, true)
		assert.equal(boolJMb5gIO, true)
		assert.equal(boolU0tDCSP, true)
		assert.equal(booleE08faZ, true)
	});

	it('test for Dipex', async () => {
		const stringM8JUdry = "hE9DwH9xkqwNXF1GC0193uoM"
		const stringpfiv4nC = "RMhYR4RDD4BYioG"
		const uintL0ezpUX = BigInt("1741")
		const DipexTX7dp6p = await Dipex.new(stringM8JUdry, stringpfiv4nC, uintL0ezpUX, {from: accounts[1]});
		const uintTgvf3b = BigInt("319")
		const addresseNZvtS = accounts[5]
		const uintnytVRFj = BigInt("66")
		const addressl8ffIDt = "0x00000000000000000000000000000000000000-1"
		const addressLBBwKPb = accounts[4]
		const boolow6cj3n = await DipexTX7dp6p.approve.call(addresseNZvtS, uintTgvf3b, {from: accounts[2]});
//		const boolI34GzuA = await DipexTX7dp6p.transferFrom.call(addressLBBwKPb, addressl8ffIDt, uintnytVRFj, {from: accounts[5]});

		assert.equal(boolow6cj3n, true)
		await expect(DipexTX7dp6p.transferFrom.call(addressLBBwKPb, addressl8ffIDt, uintnytVRFj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhBOyFmT = "YDA"
		const stringVDaQLOz = "7YllYcyjIAY5GMYsTH3itpFW7wVs2XQqXad88wXrGLD7APIfpkwWuzXOl9IoFQpYpLsXDQ1QKb92FViHaDpt"
		const uintvdUMOs = BigInt("987")
		const DipexmMCFYnv = await Dipex.new(stringhBOyFmT, stringVDaQLOz, uintvdUMOs, {from: accounts[5]});
		const uintiBhE40n = BigInt("634")
		const addressbhum5FZ = accounts[3]
		const uintb9oYLy4 = BigInt("1634")
		const addressG3RSym6 = accounts[1]
		const uintDVwgl6 = BigInt("0")
		const addressKM4A4Cw = accounts[0]
		const uintvUNFHJj = BigInt("500")
		const addresskOl8277 = accounts[2]
		const uintYpLK1md = BigInt("912")
		const addressAeHkk0 = accounts[4]
		const addressadSiP6J = accounts[1]
		const uintfUysryL = BigInt("1107")
		const addresszRaCue4 = "0x0000000000000000000000000000000000000002"
		const uintiFUiztL = BigInt("1979")
		const addressN91vDVs = accounts[1]
		const uintPpIt7iN = BigInt("965")
		const addressrIBU7uJ = accounts[4]
		const addressN9D4rG5 = accounts[0]
		const uintXTLDkAk = BigInt("948")
		const address8YI8jB = accounts[1]
		const address8zDGr8 = accounts[5]
		const uintBxGzzgW = BigInt("1323")
		const addressMELXZRf = accounts[5]
		const boolF8dgO3 = await DipexmMCFYnv.approve.call(addressbhum5FZ, uintiBhE40n, {from: accounts[3]});
		const boolbowf6g = await DipexmMCFYnv.approve.call(addressG3RSym6, uintb9oYLy4, {from: accounts[3]});
		const boolVkII4lz = await DipexmMCFYnv.approveAndCall.call(addressKM4A4Cw, uintDVwgl6, {from: accounts[5]});
//		const boolFKYsrzs = await DipexmMCFYnv.transfer.call(addresskOl8277, uintvUNFHJj, {from: accounts[2]});
//		const boolWNXDfqm = await DipexmMCFYnv.transferFrom.call(addressadSiP6J, addressAeHkk0, uintYpLK1md, {from: accounts[0]});
//		const boolnkVFc9B = await DipexmMCFYnv.approveAndCall.call(addresszRaCue4, uintfUysryL, {from: accounts[5]});
//		const boolbDCAoab = await DipexmMCFYnv.approve.call(addressN91vDVs, uintiFUiztL, {from: accounts[1]});
//		const boolFJRxaB9 = await DipexmMCFYnv.transferFrom.call(addressN9D4rG5, addressrIBU7uJ, uintPpIt7iN, {from: accounts[0]});
//		const boolGjMQYE = await DipexmMCFYnv.transferFrom.call(address8zDGr8, address8YI8jB, uintXTLDkAk, {from: accounts[3]});
//		const boolJf1jkz9 = await DipexmMCFYnv.transfer.call(addressMELXZRf, uintBxGzzgW, {from: accounts[0]});

		assert.equal(boolF8dgO3, true)
		assert.equal(boolVkII4lz, true)
		assert.equal(boolbowf6g, true)
		await expect(DipexmMCFYnv.transfer.call(addresskOl8277, uintvUNFHJj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringdBPVmJm = "iJVGOejBt9TqXceWjEHoiQSrvLJosroyjao0AaHyvnvXiv7C3SRCEEU4xJyPURVj3UV3HRV6HemPEP9jqNSPs"
		const stringPYffwqi = "K9AngwCNIy45wKDBKEVYyxLzwVfESHXMUC3Sp1UEijWqHMA57nP65oCiTPKv"
		const uintxN7Ryqp = BigInt("568")
		const DipexJtZuu8Z = await Dipex.new(stringdBPVmJm, stringPYffwqi, uintxN7Ryqp, {from: accounts[3]});
		const addressG21GRx = accounts[5]
		const uintNF4PdYq = BigInt("1396")
		const addressVoatoMV = accounts[5]
		const uintk2IDwbu = BigInt("0")
		const addresstMgUYO7 = accounts[5]
		const uintuEFJICB = BigInt("1947")
		const addressyv0tKU = accounts[1]
		const uintuiYlci8 = BigInt("485")
		const addressSYmcknl = accounts[4]
		const uintstuTJtX = BigInt("414")
		const addressrXJdM6S = accounts[5]
		const uintPuKPQVO = BigInt("1055")
		const addressjPEZ6S = accounts[2]
		const uintNEx2Fe = BigInt("1579")
		const addressiOV1QvY = "0x0000000000000000000000000000000000000001"
		const uinttawR309 = BigInt("377")
		const addressTSgNJZg = "0x0000000000000000000000000000000000000001"
		const addressxMedzpr = accounts[5]
		const uintD36Wqv = BigInt("769")
		const addressic8dt6U = accounts[0]
		const uintHohu58T = BigInt("1360")
		const addressNg6xxlF = accounts[3]
		const uintD2ZXuWg = BigInt("998")
		const addressz9xeZWu = accounts[3]
		const uintajOrOw2 = BigInt("1995")
		const addresshvzgdkz = accounts[2]
		const uintH8QFzrT = BigInt("660")
		const addressacmUjUX = accounts[0]
		const addressqElWrTS = accounts[2]
		const boolJMb5gIO = await DipexJtZuu8Z.transferownership.call(addressG21GRx, {from: accounts[3]});
		const boolLOPibgm = await DipexJtZuu8Z.approve.call(addressVoatoMV, uintNF4PdYq, {from: accounts[0]});
		const boolwDkCvgQ = await DipexJtZuu8Z.transfer.call(addresstMgUYO7, uintk2IDwbu, {from: accounts[0]});
		const boolGPcG8yk = await DipexJtZuu8Z.approve.call(addressyv0tKU, uintuEFJICB, {from: accounts[4]});
		const bool76xa2v = await DipexJtZuu8Z.approveAndCall.call(addressSYmcknl, uintuiYlci8, {from: accounts[3]});
		const boolx65Fq9g = await DipexJtZuu8Z.approve.call(addressrXJdM6S, uintstuTJtX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsikw7d = await DipexJtZuu8Z.transfer.call(addressjPEZ6S, uintPuKPQVO, {from: accounts[4]});
//		const boolKfg6I3V = await DipexJtZuu8Z.approveAndCall.call(addressiOV1QvY, uintNEx2Fe, {from: accounts[2]});
//		const boolxL4YAsz = await DipexJtZuu8Z.transferFrom.call(addressxMedzpr, addressTSgNJZg, uinttawR309, {from: accounts[3]});
//		const boolTFUJhkq = await DipexJtZuu8Z.approveAndCall.call(addressic8dt6U, uintD36Wqv, {from: accounts[3]});
//		const boolmwz3Ej1 = await DipexJtZuu8Z.approveAndCall.call(addressNg6xxlF, uintHohu58T, {from: accounts[5]});
//		const boolRxqr9oq = await DipexJtZuu8Z.approve.call(addressz9xeZWu, uintD2ZXuWg, {from: accounts[3]});
//		const boolJfRoNzJ = await DipexJtZuu8Z.approve.call(addresshvzgdkz, uintajOrOw2, {from: accounts[4]});
//		const booleoYljlp = await DipexJtZuu8Z.transferFrom.call(addressqElWrTS, addressacmUjUX, uintH8QFzrT, {from: accounts[1]});

		assert.equal(bool76xa2v, true)
		assert.equal(boolGPcG8yk, true)
		assert.equal(boolJMb5gIO, true)
		assert.equal(boolLOPibgm, true)
		assert.equal(boolwDkCvgQ, true)
		assert.equal(boolx65Fq9g, true)
		await expect(DipexJtZuu8Z.transfer.call(addressjPEZ6S, uintPuKPQVO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})