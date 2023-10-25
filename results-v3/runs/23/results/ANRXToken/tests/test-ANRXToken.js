const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uints5uH3Az = BigInt("1293")
		const stringxaIQ0ih = "91nMYelxHMnuXfKRm3ETCBibRQAFOsl5e58XRX1NU0t2I6HQLCzsFX9478hDNdvr4dEmJghcdf1ns34mlQWdKYOnScuW"
		const stringDqnOGSi = "6ZJ1uJJzNbifix1qk"
		const uintqqlBjJ = BigInt("273")
		const ANRXTokens37IVvS = await ANRXToken.new(uints5uH3Az, stringxaIQ0ih, stringDqnOGSi, uintqqlBjJ, {from: accounts[3]});
		const uintXUcobZC = BigInt("1562")
		const addressZEHulv4 = accounts[4]
		const addressxLL5Pqp = accounts[3]
		const addressAu07xYL = accounts[0]
		const uintrt01b4Z = BigInt("882")
		const addressO7hXAzG = accounts[3]
		const addresswmF6qii = accounts[1]
		const addressqjUC364 = accounts[4]
		const addressB9N5V4C = accounts[1]
		const uintykMQ6r = BigInt("1211")
		const boolTGBlQwG = await ANRXTokens37IVvS.transfer.call(addressZEHulv4, uintXUcobZC, {from: accounts[0]});
		const uintynXe3lD = await ANRXTokens37IVvS.totalSupply.call({from: accounts[2]});
		const uintWgT9oMF = await ANRXTokens37IVvS.allowance.call(addressAu07xYL, addressxLL5Pqp, {from: accounts[1]});
		const boolEiuSW2m = await ANRXTokens37IVvS.transferFrom.call(addresswmF6qii, addressO7hXAzG, uintrt01b4Z, {from: accounts[2]});
		const uintnzVqCdC = await ANRXTokens37IVvS.allowance.call(addressB9N5V4C, addressqjUC364, {from: accounts[0]});
		const uinthoO9tO = await ANRXTokens37IVvS.redeem.call(uintykMQ6r, {from: accounts[3]});

		await expect(ANRXTokens37IVvS.transfer.call(addressZEHulv4, uintXUcobZC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsAeCuA0 = BigInt("756")
		const stringp95fYBl = "o"
		const stringL84EMr = "SlOz4zgJuNiN6zaQpUqaD4Os6O5uPy7L8AHoYVU"
		const uintyIKTLX1 = BigInt("522")
		const ANRXTokenJLiUa9c = await ANRXToken.new(uintsAeCuA0, stringp95fYBl, stringL84EMr, uintyIKTLX1, {from: accounts[2]});
		const uintfn8jBNJ = BigInt("1545")
		const uinttmGC4hq = BigInt("1663")
		const addresszb235lm = accounts[2]
		const addresszXAU3rP = accounts[4]
		const addressaYRro1k = accounts[2]
		const uint7SAQnj = BigInt("1031")
		const addressbelkwbV = accounts[4]
		const uintWvcJd73 = BigInt("1148")
		const addressoGnbibI = accounts[5]
		const uintIMhQF4 = await ANRXTokenJLiUa9c.redeem.call(uintfn8jBNJ, {from: accounts[1]});
		const boolRZfMZci = await ANRXTokenJLiUa9c.transferFrom.call(addresszXAU3rP, addresszb235lm, uinttmGC4hq, {from: accounts[4]});
		const addresslMBzDsT = await ANRXTokenJLiUa9c.deprecate.call(addressaYRro1k, {from: accounts[1]});
		const booleOSVCMc = await ANRXTokenJLiUa9c.transfer.call(addressbelkwbV, uint7SAQnj, {from: accounts[4]});
		const uintbbKSSsL = await ANRXTokenJLiUa9c.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXSq1NdW = await ANRXTokenJLiUa9c.approve.call(addressoGnbibI, uintWvcJd73, {from: accounts[3]});

		await expect(ANRXTokenJLiUa9c.redeem.call(uintfn8jBNJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIJAHvjx = BigInt("951")
		const stringDu4If76 = "CtQayHFSLXdPzCqScObS9LQmnXkMufksuF9NRp7D8hpDsodpeE8vr5NfdrVxPDQCL9K9E5AD"
		const stringKAmdlDY = "6aYKnCAVbH17qqub4XqMXMBLHIQ4XgO5JBEJedIOm5t4z3GmlvzWL83PKgzly8p"
		const uinteIqnU1r = BigInt("1856")
		const ANRXTokenY2GAe0F = await ANRXToken.new(uintIJAHvjx, stringDu4If76, stringKAmdlDY, uinteIqnU1r, {from: accounts[0]});
		const uintP4qnUVL = BigInt("222")
		const uinthwknlWZ = BigInt("736")
		const uintvYktuID = BigInt("617")
		const uintCNXuJwE = BigInt("1589")
		const addressFzKs1Pi = accounts[5]
		const uintIOYPWjQ = await ANRXTokenY2GAe0F.totalSupply.call({from: accounts[2]});
		const uintPJpCx6G = await ANRXTokenY2GAe0F.setParams.call(uinthwknlWZ, uintP4qnUVL, {from: accounts[3]});
		const uintrGfGzyM = await ANRXTokenY2GAe0F.setParams.call(uintCNXuJwE, uintvYktuID, {from: accounts[3]});
		const uintprOVory = await ANRXTokenY2GAe0F.balanceOf.call(addressFzKs1Pi, {from: accounts[4]});

		assert.equal(uintIOYPWjQ, BigInt("951"))
		await expect(ANRXTokenY2GAe0F.setParams.call(uinthwknlWZ, uintP4qnUVL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintPoNyAk2 = BigInt("171")
		const stringx54nOVE = "OjXnCqnCYdblzs"
		const stringqhSU7l1 = "SCkoqkriTgehWqt"
		const uintAswyqV = BigInt("1666")
		const ANRXTokenKUqISj2 = await ANRXToken.new(uintPoNyAk2, stringx54nOVE, stringqhSU7l1, uintAswyqV, {from: accounts[0]});
		const addressoIfANb6 = accounts[1]
		const addressFSk8Ivz = accounts[4]
		const addresspTpwfE = accounts[0]
		const addresszc8tmi1 = accounts[1]
		const addressSklxt9h = accounts[5]
		const uintLnbV0X = BigInt("891")
		const uintNJwtmUr = BigInt("1433")
		const addressUlGFnSn = await ANRXTokenKUqISj2.deprecate.call(addressoIfANb6, {from: accounts[0]});
		const uintbYzaZ0r = await ANRXTokenKUqISj2.allowance.call(addresspTpwfE, addressFSk8Ivz, {from: accounts[4]});
		const uintVJ0gnir = await ANRXTokenKUqISj2.allowance.call(addressSklxt9h, addresszc8tmi1, {from: accounts[4]});
		const uintcaxbdT9 = await ANRXTokenKUqISj2.setParams.call(uintNJwtmUr, uintLnbV0X, {from: accounts[4]});

		assert.equal(uintVJ0gnir, BigInt("0"))
		assert.equal(uintbYzaZ0r, BigInt("0"))
		await expect(ANRXTokenKUqISj2.setParams.call(uintNJwtmUr, uintLnbV0X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintPJ0wDo = BigInt("440")
		const stringJpp4EF = "BtP46WxEgeE9opW8l1bswKPUFhhbTinFhEg2t6pI3hr67uQWTGLC"
		const stringe5v0bxk = "LKYKPGWwvv"
		const uintMF2eyNm = BigInt("23")
		const ANRXToken9NbJoi = await ANRXToken.new(uintPJ0wDo, stringJpp4EF, stringe5v0bxk, uintMF2eyNm, {from: accounts[4]});
		const addressERYQGYP = accounts[0]
		const addressxyX0dNb = accounts[0]
		const addressSX55JBJ = accounts[0]
		const addressaSr6q94 = accounts[1]
		const addressuWvvxW5 = accounts[3]
		const uintL0PwdFM = await ANRXToken9NbJoi.allowance.call(addressxyX0dNb, addressERYQGYP, {from: accounts[3]});
		const uintnxPD0df = await ANRXToken9NbJoi.allowance.call(addressaSr6q94, addressSX55JBJ, {from: accounts[0]});
		const uintomzEKsT = await ANRXToken9NbJoi.balanceOf.call(addressuWvvxW5, {from: accounts[0]});

		assert.equal(uintL0PwdFM, BigInt("0"))
		assert.equal(uintnxPD0df, BigInt("0"))
		assert.equal(uintomzEKsT, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintxLG3J2f = BigInt("171")
		const stringx54nOVE = "OjXnCqnCYdblzs"
		const stringqhSU7l1 = "SCkoqkriTgehWqt"
		const uintiWcA1ga = BigInt("1666")
		const ANRXTokenKUqISj2 = await ANRXToken.new(uintxLG3J2f, stringx54nOVE, stringqhSU7l1, uintiWcA1ga, {from: accounts[0]});
		const addressNEAZPiC = accounts[1]
		const uintxIVq8Pz = BigInt("343")
		const addressvQNqmYk = accounts[1]
		const addressCE1g4uf = accounts[6]
		const addressmIDL4AP = accounts[5]
		const uintRGsBI2 = BigInt("891")
		const uintC76pDw1 = BigInt("1433")
		const addressUlGFnSn = await ANRXTokenKUqISj2.deprecate.call(addressNEAZPiC, {from: accounts[0]});
		const uintKSwKKLP = await ANRXTokenKUqISj2.issue.call(uintxIVq8Pz, {from: accounts[0]});
		const uintVJ0gnir = await ANRXTokenKUqISj2.allowance.call(addressCE1g4uf, addressvQNqmYk, {from: accounts[4]});
		const addressQMpx7gu = await ANRXTokenKUqISj2.deprecate.call(addressmIDL4AP, {from: accounts[5]});
		const uintcaxbdT9 = await ANRXTokenKUqISj2.setParams.call(uintC76pDw1, uintRGsBI2, {from: accounts[4]});

		assert.equal(uintVJ0gnir, BigInt("0"))
		await expect(ANRXTokenKUqISj2.deprecate.call(addressmIDL4AP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintMC8cbSO = BigInt("1123")
		const stringY1OW9O = "ukVZ2df14hroi9eCucLW5NooCv4OssW6imLt7F2ARmI88uYFAMsl"
		const stringx6a9kat = "y3fx3OI0QANsNrNf9uhBVc0Rkq6H1ecSsRTw8nsWyj4CF27jTsCbMxfNkpODyaa"
		const uintQTQb402 = BigInt("50")
		const ANRXTokenIXlpiX = await ANRXToken.new(uintMC8cbSO, stringY1OW9O, stringx6a9kat, uintQTQb402, {from: accounts[1]});
		const addressVXY1J7f = accounts[4]
		const uintFS14k6r = BigInt("378")
		const addressy1XYNQQ = accounts[3]
		const addressdLkykxw = accounts[3]
		const addressXdQ4F88 = accounts[4]
		const addressKk8JOy = accounts[0]
		const uint0fkXcb = await ANRXTokenIXlpiX.balanceOf.call(addressVXY1J7f, {from: accounts[1]});
		const boolnNqY7rZ = await ANRXTokenIXlpiX.transferFrom.call(addressdLkykxw, addressy1XYNQQ, uintFS14k6r, {from: accounts[4]});
		const uintW8kaLsN = await ANRXTokenIXlpiX.allowance.call(addressKk8JOy, addressXdQ4F88, {from: accounts[0]});

		assert.equal(uint0fkXcb, BigInt("0"))
		await expect(ANRXTokenIXlpiX.transferFrom.call(addressdLkykxw, addressy1XYNQQ, uintFS14k6r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintJ9FFLuc = BigInt("1123")
		const stringY1OW9O = "ukVZ2df14hroi9eCucLW5NooCv4OssW6imLt7F2ARmI88uYFAMsl"
		const stringx6a9kat = "y3fx3OI0QANsNrNf9uhBVc0Rkq6H1ecSsRTw8nsWyj4CF27jTsCbMxfNkpODyaa"
		const uinteG3g5uz = BigInt("50")
		const ANRXTokenIXlpiX = await ANRXToken.new(uintJ9FFLuc, stringY1OW9O, stringx6a9kat, uinteG3g5uz, {from: accounts[1]});
		const address1Ebed9 = accounts[4]
		const uintyKJjbT = BigInt("1623")
		const uintxMzSjsi = BigInt("381")
		const addressnBeK7Wa = accounts[4]
		const address9KnmWR = accounts[3]
		const addressatHOuTE = accounts[4]
		const addressNxwUTHo = accounts[0]
		const uint0fkXcb = await ANRXTokenIXlpiX.balanceOf.call(address1Ebed9, {from: accounts[1]});
		const uintSH0dKmb = await ANRXTokenIXlpiX.totalSupply.call({from: accounts[2]});
		const uintZZ3qHjG = await ANRXTokenIXlpiX.redeem.call(uintyKJjbT, {from: accounts[1]});
		const boolnNqY7rZ = await ANRXTokenIXlpiX.transferFrom.call(address9KnmWR, addressnBeK7Wa, uintxMzSjsi, {from: accounts[4]});
		const uintW8kaLsN = await ANRXTokenIXlpiX.allowance.call(addressNxwUTHo, addressatHOuTE, {from: accounts[0]});

		assert.equal(uint0fkXcb, BigInt("0"))
		assert.equal(uintSH0dKmb, BigInt("1123"))
		await expect(ANRXTokenIXlpiX.redeem.call(uintyKJjbT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinty7NQw8 = BigInt("1017")
		const stringtQrxT6L = "K5gHAhN1x2wUhRsjt6JpgOrlN1u0q4GW4TDIZDsc7JrS33RAZboO7pxmbhV2EeevckV3lPNjEUe5D8SDIueYVClocWyh"
		const stringH30GsXR = "zhJGmsK6Ltbl12laXnTogB"
		const uintKc0ijBm = BigInt("1761")
		const ANRXTokeniqBAcQx = await ANRXToken.new(uinty7NQw8, stringtQrxT6L, stringH30GsXR, uintKc0ijBm, {from: accounts[2]});
		const uinttOV6Gnw = BigInt("558")
		const addressMP0BLFJ = accounts[4]
		const addressonqdLby = accounts[2]
		const boolZGAvmp = await ANRXTokeniqBAcQx.approve.call(addressMP0BLFJ, uinttOV6Gnw, {from: accounts[3]});
		const uintz08hOW = await ANRXTokeniqBAcQx.balanceOf.call(addressonqdLby, {from: accounts[1]});
		const uint9CwEv7 = await ANRXTokeniqBAcQx.totalSupply.call({from: accounts[2]});

		assert.equal(boolZGAvmp, true)
		assert.equal(uint9CwEv7, BigInt("1017"))
		assert.equal(uintz08hOW, BigInt("1017"))
	});

	it('test for ANRXToken', async () => {
		const uintcbyvHYI = BigInt("841")
		const stringAAYUfvG = "sMply2PrjQrEixf"
		const stringP5jwMa6 = "MJveBFWt"
		const uintMSyXFvw = BigInt("829")
		const ANRXTokenL0jpUlB = await ANRXToken.new(uintcbyvHYI, stringAAYUfvG, stringP5jwMa6, uintMSyXFvw, {from: accounts[3]});
		const addressGjgFhUg = accounts[3]
		const uintx553I8q = BigInt("986")
		const uintqLoRz4 = BigInt("2008")
		const addressUiW2bRB = await ANRXTokenL0jpUlB.deprecate.call(addressGjgFhUg, {from: accounts[3]});
		const uintpnkkBE4 = await ANRXTokenL0jpUlB.setParams.call(uintqLoRz4, uintx553I8q, {from: accounts[3]});

		await expect(ANRXTokenL0jpUlB.setParams.call(uintqLoRz4, uintx553I8q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmwxRoWq = BigInt("2045")
		const stringg3wppcm = "9nIUq7Hd4J4Av0i5wIEQEJA1yeiKEtFSdD2C21NSJOL8vEjUVK1rtkk6nB2XsC7kT"
		const stringqMqLcqH = "nZcKg"
		const uint2ElJcd = BigInt("2047")
		const ANRXTokenrVFiCeV = await ANRXToken.new(uintmwxRoWq, stringg3wppcm, stringqMqLcqH, uint2ElJcd, {from: "0x0000000000000000000000000000000000000001"});
		const addressRBlIGPz = accounts[4]
		const uintbzHCRAC = BigInt("184")
		const addressZtCDcAd = accounts[3]
		const uintnQriGuM = BigInt("1390")
		const addressTvCYcUc = accounts[3]
		const uintdvvSGdE = BigInt("683")
		const uintmg6ohGm = await ANRXTokenrVFiCeV.balanceOf.call(addressRBlIGPz, {from: accounts[4]});
		const boolu7VlF5 = await ANRXTokenrVFiCeV.approve.call(addressZtCDcAd, uintbzHCRAC, {from: accounts[3]});
		const boolUkyQkg8 = await ANRXTokenrVFiCeV.transfer.call(addressTvCYcUc, uintnQriGuM, {from: accounts[5]});
		const uintBOWQ2Qf = await ANRXTokenrVFiCeV.issue.call(uintdvvSGdE, {from: accounts[3]});
	});
})