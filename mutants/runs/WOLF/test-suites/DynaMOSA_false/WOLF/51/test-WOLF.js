const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintr2p5BRC = BigInt("179")
		const WOLFnW6lMB = await WOLF.new(stringNdO8qcm, stringwWQuYOv, uintr2p5BRC, {from: accounts[4]});
		const uintMLQvyIs = BigInt("1948")
		const addressWQQw8oh = accounts[2]
		const addressWYEFqmx = accounts[0]
		const addressgbPj8H2 = accounts[2]
		const boolnqJVxB2 = await WOLFnW6lMB.transferFrom.call(addressWYEFqmx, addressWQQw8oh, uintMLQvyIs, {from: accounts[2]});
		const boolzg9oKza = await WOLFnW6lMB.transferownership.call(addressgbPj8H2, {from: accounts[2]});

		await expect(WOLFnW6lMB.transferFrom.call(addressWYEFqmx, addressWQQw8oh, uintMLQvyIs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringL6K7lfd = "RArGaSmcxrSBpAcCecgQSK1qhlIX0e68UDH8pxaqY5EMSNw3z4KFXm4kydNmXY"
		const stringRLWz58 = "6yGoJkWKOjXGmH0NtPSA76G1bTq5KJePbR7sfdueZT8tgT0yBrPuJ65POS1YG5n"
		const uintubOBvTq = BigInt("1906")
		const WOLFbYbSH5P = await WOLF.new(stringL6K7lfd, stringRLWz58, uintubOBvTq, {from: accounts[0]});
		const uintlEOvSU0 = BigInt("1194")
		const addressVXE8611 = accounts[0]
		const uintnT6p6u = BigInt("1783")
		const addressWdk3xGh = accounts[2]
		const uintkr6Sygz = BigInt("605")
		const addressmUqzabG = accounts[4]
		const addressAwiL21D = accounts[1]
		const boolDcIbMbJ = await WOLFbYbSH5P.transfer.call(addressVXE8611, uintlEOvSU0, {from: accounts[2]});
		const boolEhjA0hG = await WOLFbYbSH5P.approve.call(addressWdk3xGh, uintnT6p6u, {from: accounts[1]});
		const boolXvt00Z = await WOLFbYbSH5P.transferFrom.call(addressAwiL21D, addressmUqzabG, uintkr6Sygz, {from: accounts[0]});

		await expect(WOLFbYbSH5P.transfer.call(addressVXE8611, uintlEOvSU0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXphAmUU = "aJURzvUEgbqmpvpThxuLKTGwRoEUlnt"
		const stringYD6Z9vd = "K0XXymhxEaKppBDv8oyRajjy0VRI"
		const uintEDjsUQs = BigInt("1952")
		const WOLFAjaBpu2 = await WOLF.new(stringXphAmUU, stringYD6Z9vd, uintEDjsUQs, {from: accounts[3]});
		const uints7nNnPW = BigInt("499")
		const addressoyk0jdb = accounts[0]
		const addressCcBZsS1 = accounts[5]
		const uintQuGNXvU = BigInt("62")
		const addressdJhOn1Q = accounts[5]
		const boolHYZEPZn = await WOLFAjaBpu2.transferFrom.call(addressCcBZsS1, addressoyk0jdb, uints7nNnPW, {from: accounts[5]});
		const boolnSgL9ME = await WOLFAjaBpu2.approveAndCall.call(addressdJhOn1Q, uintQuGNXvU, {from: accounts[0]});

		await expect(WOLFAjaBpu2.transferFrom.call(addressCcBZsS1, addressoyk0jdb, uints7nNnPW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringeY8vBdb = "lw7dT"
		const stringEdAFsnw = "HlqXqII4AUFAP8S5cUMbakyPO1BeljGmjMw"
		const uintfiK7Yoq = BigInt("1883")
		const WOLFz9aWQjJ = await WOLF.new(stringeY8vBdb, stringEdAFsnw, uintfiK7Yoq, {from: "0x0000000000000000000000000000000000000001"});
		const uintXyJU4eq = BigInt("129")
		const addressuAh5hT1 = accounts[0]
		const addressxoJ6VYe = accounts[2]
		const uintgoZ9f8T = BigInt("1117")
		const addresswWVFn8A = accounts[2]
		const addresshla9hFH = accounts[5]
		const uintusJzflc = BigInt("501")
		const addressZJN1KRh = accounts[4]
		const uintiH9IobI = BigInt("2012")
		const addressskjZ2p3 = "0x0000000000000000000000000000000000000001"
		const boolDIDzn6x = await WOLFz9aWQjJ.transferFrom.call(addressxoJ6VYe, addressuAh5hT1, uintXyJU4eq, {from: accounts[2]});
		const boolqU8BXmO = await WOLFz9aWQjJ.transferFrom.call(addresshla9hFH, addresswWVFn8A, uintgoZ9f8T, {from: "0x0000000000000000000000000000000000000001"});
		const boolR02gRGH = await WOLFz9aWQjJ.approveAndCall.call(addressZJN1KRh, uintusJzflc, {from: "0x0000000000000000000000000000000000000001"});
		const boolr8FtJt0 = await WOLFz9aWQjJ.approveAndCall.call(addressskjZ2p3, uintiH9IobI, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringkLgvTWx = "NLuYbGbiahap2pHglg5AmHMYAqLub3Y2xXGG"
		const stringZVCEzdL = "OyZjF3UGqeXqresL462JfcgbDjokDDJTWew6uAOYNwm"
		const uintsA55tap = BigInt("259")
		const WOLFC9QOjUq = await WOLF.new(stringkLgvTWx, stringZVCEzdL, uintsA55tap, {from: accounts[2]});
		const addressYJHEqeq = accounts[1]
		const uintlE6eOd = BigInt("1096")
		const addressdFKzvr = "0x0000000000000000000000000000000000000001"
		const uintEAWMhl = BigInt("498")
		const addressvIaVuHZ = accounts[1]
		const uinttUJOKeS = BigInt("912")
		const addresswaPn1HE = accounts[3]
		const boolvl1BFma = await WOLFC9QOjUq.transferownership.call(addressYJHEqeq, {from: accounts[1]});
		const boolgT7nLP = await WOLFC9QOjUq.approve.call(addressdFKzvr, uintlE6eOd, {from: accounts[1]});
		const boolv4k6wwp = await WOLFC9QOjUq.approveAndCall.call(addressvIaVuHZ, uintEAWMhl, {from: accounts[5]});
		const boolE77K5gS = await WOLFC9QOjUq.approveAndCall.call(addresswaPn1HE, uinttUJOKeS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFC9QOjUq.transferownership.call(addressYJHEqeq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringLNFd3D1 = "1cTT5sytUqiTLHeKrnVWGsFYVsMG276TjHyKiCPgr"
		const stringE4mtSNM = "kSz6vCAK6ISAM8slSzKsAZ2t3PTYAlULwqL4bfgeo3ntKEqLT35AnoAF"
		const uint24sZYv = BigInt("136")
		const WOLFotZwHJ8 = await WOLF.new(stringLNFd3D1, stringE4mtSNM, uint24sZYv, {from: accounts[1]});
		const uintf8faAXe = BigInt("1900")
		const addressyDzwO8 = accounts[1]
		const uinttlXVgmf = BigInt("1291")
		const addresslA4O9zs = accounts[0]
		const uinttPuCv4M = BigInt("535")
		const address2z7k6l = accounts[4]
		const uintHGs5hyS = BigInt("1485")
		const addressLDesfGB = accounts[4]
		const boolO2S4mjL = await WOLFotZwHJ8.approveAndCall.call(addressyDzwO8, uintf8faAXe, {from: accounts[3]});
		const boolmwzZjs = await WOLFotZwHJ8.approveAndCall.call(addresslA4O9zs, uinttlXVgmf, {from: accounts[5]});
		const boolsEZwsga = await WOLFotZwHJ8.transfer.call(address2z7k6l, uinttPuCv4M, {from: accounts[2]});
		const boolyTGpZ65 = await WOLFotZwHJ8.approveAndCall.call(addressLDesfGB, uintHGs5hyS, {from: accounts[5]});

		await expect(WOLFotZwHJ8.approveAndCall.call(addressyDzwO8, uintf8faAXe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringSFjFDfj = "DI1H9Uyh2V7aDeA74icdruO3C8gNl5eeeelAQNnXA5GpM"
		const stringoxbEQdO = "OLf9edf4vmSlanX1EA1X8MGjKXWOcwmSSSxr2YlKlyL"
		const uintbvq6d8 = BigInt("1131")
		const WOLFwCJy4Mu = await WOLF.new(stringSFjFDfj, stringoxbEQdO, uintbvq6d8, {from: accounts[1]});
		const uint6AaC9q = BigInt("1816")
		const addressrvPTVY8 = accounts[4]
		const uintCvQNYl2 = BigInt("719")
		const addresskSrqyNb = accounts[1]
		const boolhhlAH09 = await WOLFwCJy4Mu.approve.call(addressrvPTVY8, uint6AaC9q, {from: accounts[5]});
		const boolM4V8gCI = await WOLFwCJy4Mu.approveAndCall.call(addresskSrqyNb, uintCvQNYl2, {from: accounts[1]});

		assert.equal(boolM4V8gCI, true)
		assert.equal(boolhhlAH09, true)
	});

	it('test for WOLF', async () => {
		const stringDn8162 = "JJXF1QQBsPR97UMp9segaotJOCMIPlIQtexx1W2hcf3QEzMSx5vn8nrCHvhihUwjc3Seak3qJGbzMkqPCRT7a7BiuYOYcVRyY"
		const stringLsEFdQX = "eOKL1IdDLwyYTM6jYlBH"
		const uintvSJ9CH3 = BigInt("472")
		const WOLFBKZbmWG = await WOLF.new(stringDn8162, stringLsEFdQX, uintvSJ9CH3, {from: accounts[0]});
		const uintuSJ2Miy = BigInt("0")
		const addresscN5eIHZ = accounts[1]
		const addressVti7Wva = accounts[4]
		const addresshdgcIGX = accounts[4]
		const uintmCiDxal = BigInt("885")
		const addressYstQxuu = accounts[2]
		const boollu0Ezq = await WOLFBKZbmWG.transferFrom.call(addressVti7Wva, addresscN5eIHZ, uintuSJ2Miy, {from: accounts[2]});
		const boolh7dYW2s = await WOLFBKZbmWG.transferownership.call(addresshdgcIGX, {from: accounts[2]});
		const boolIQiwUe3 = await WOLFBKZbmWG.approve.call(addressYstQxuu, uintmCiDxal, {from: accounts[2]});

		assert.equal(boollu0Ezq, true)
		await expect(WOLFBKZbmWG.transferownership.call(addresshdgcIGX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIRlmUBS = "ILVLqYnIT4YYCjwt7tJwLSKv1p5v28EgwvpbLGXHFcewaM5LMrmpyEk4r5f2ohKcUlrymgvbc"
		const stringb8sRr3D = "DpCrysf9IawHhXreOtwu0"
		const uintFFnAk6X = BigInt("98")
		const WOLFQPbdHfc = await WOLF.new(stringIRlmUBS, stringb8sRr3D, uintFFnAk6X, {from: accounts[2]});
		const uintJVSsTV9 = BigInt("1851")
		const addressJLBqi19 = accounts[3]
		const uintTi9nDBa = BigInt("0")
		const addressWkhi9C9 = accounts[4]
		const uintdMoZO32 = BigInt("399")
		const addressY7EUKyY = accounts[1]
		const uintfCXqfIB = BigInt("1599")
		const addressRAzxikk = accounts[0]
		const uintpCh2Vkg = BigInt("1012")
		const addressP3jdLrs = accounts[1]
		const uintvtldGjT = BigInt("1432")
		const addressnUXDbH4 = accounts[3]
		const uintTBZfrq = BigInt("1006")
		const addressG4NBHaD = accounts[0]
		const addressr560ke = accounts[0]
		const boolGWEO5AZ = await WOLFQPbdHfc.approveAndCall.call(addressJLBqi19, uintJVSsTV9, {from: accounts[2]});
		const boolUSHhZ8x = await WOLFQPbdHfc.approveAndCall.call(addressWkhi9C9, uintTi9nDBa, {from: accounts[2]});
		const boolel6E56E = await WOLFQPbdHfc.approveAndCall.call(addressY7EUKyY, uintdMoZO32, {from: accounts[2]});
		const booli5HOPz0 = await WOLFQPbdHfc.approve.call(addressRAzxikk, uintfCXqfIB, {from: accounts[3]});
		const boolvwRoLEW = await WOLFQPbdHfc.approve.call(addressP3jdLrs, uintpCh2Vkg, {from: accounts[4]});
		const boolOx26yGB = await WOLFQPbdHfc.transfer.call(addressnUXDbH4, uintvtldGjT, {from: accounts[4]});
		const boolBgbMPrc = await WOLFQPbdHfc.transferFrom.call(addressr560ke, addressG4NBHaD, uintTBZfrq, {from: accounts[2]});

		assert.equal(boolGWEO5AZ, true)
		assert.equal(boolUSHhZ8x, true)
		assert.equal(boolel6E56E, true)
		assert.equal(booli5HOPz0, true)
		assert.equal(boolvwRoLEW, true)
		await expect(WOLFQPbdHfc.transfer.call(addressnUXDbH4, uintvtldGjT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})